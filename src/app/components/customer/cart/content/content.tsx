import Menu from "./menu";
import { bill, delivery, main } from "@/app/lib/content/customer/cart";
import Choice from "./choice";
import { useEffect, useState } from "react";
import { orderChangeCustomer, orderGetAll } from "@/app/controller/order";
import { paymentCreateClient, paymentGet } from "@/app/controller/payment";
import { useRouter } from "next/navigation";
import { customerGetTransaction, customerUpdateMerchant } from "@/app/controller/customer";
import { transactionCreate, transactionUpdate } from "@/app/controller/transaction";
import { status } from "@/app/lib/content/customer/order";

export default function Content() {

    const [menu, setMenu] = useState<{ _id: string, menuId: string }[]>([])
    const [transactionId, setTransactionId] = useState("")
    const [choice, setchoice] = useState(0)
    const [total, setTotal] = useState(0)
    const [food, setFood] = useState(0)
    const [fare, setFare] = useState(0)
    const [buffer, setBuffer] = useState(false)

    const router = useRouter()

    async function getMenu() {
        const data = await orderGetAll()
        const transaction = await customerGetTransaction()
        if (data)
            setMenu(data)
        if (transaction)
            setTransactionId(transaction)
    }

    async function fun() {
        const data = await paymentGet()
        setTotal(data.total)
    }

    async function getPrice() {
        const data = await paymentGet()
        if (data.state) {
            setTotal(data.total)
            setFare(data.delivery)
            setFood(data.food)
        }
    }

    async function handlePayment() {
        setBuffer(true)
        const transaction = await transactionCreate(total, 1, delivery.type[choice]).catch(e => console.log(e));
        await customerUpdateMerchant(null)
        await orderChangeCustomer(transaction._id)
        const data = await paymentCreateClient({ transactionId: transaction._id, total: total })
        console.log(data)
        await transactionUpdate(transaction._id, data.payment.actions[0].url, data.payment.transaction_id)
        router.push(`/pages/customer/order/${transaction._id}`)
        setBuffer(false)
    }

    useEffect(() => {
        getMenu()
        getPrice()
    }, [])


    return (
        <div className="min-h-full">
            {
                menu.length == 0 ?
                    <div className="flex justify-center items-center h-full text-2xl text-black">
                        <p>Belum ada pesanan....</p>
                    </div>
                    :
                    <div>
                        <div className="relative text-black pl-5 pr-5 mt-8 md:mt-10 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-4 pb-16">
                            <h1 className="font-bold text-3xl md:text-4xl">{main.section}</h1>
                            <div className="flex flex-col space-y-8">
                                {
                                    menu.map(item => (
                                        <Menu id={item.menuId} orderId={item._id} fun={fun} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="text-black pl-5 pr-5 mt-5 md:mt-5 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-5 pb-10">
                            <h1 className="font-bold text-3xl md:text-4xl">{delivery.title}/Pengambilan</h1>
                            <div className="flex lg:flex-row lg:space-x-8 flex-col space-y-4 lg:space-y-0">
                                <Choice name={delivery.type[0]} index={0} choice={choice} setStatus={setchoice} />
                                <Choice name={delivery.type[1]} index={1} choice={choice} setStatus={setchoice} />
                                <Choice name={delivery.type[2]} index={2} choice={choice} setStatus={setchoice} />
                            </div>
                        </div>
                        <div className="text-black pl-5 pr-5 mt-10 md:mt-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-10 pb-10">
                            <div className="flex flex-col space-y-2">
                                <h1 className="font-bold text-3xl md:text-4xl">{bill.title}</h1>
                                <h1 className="font-bold text-4xl md:text-6xl">Rp {total.toLocaleString("DE-de")},00</h1>
                                <div className="flex flex-row space-x-2">
                                    <div className="w-fit">
                                        <div className="flex flex-row w-full justify-between">
                                            <p className="pr-2">{bill.detail.food.comment}</p>
                                            <p>:</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between">
                                            <p>{bill.detail.delivery.comment}</p>
                                            <p>:</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between">
                                            <p>Biaya Layanan</p>
                                            <p>:</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Rp {food.toLocaleString("DE-de")},00</p>
                                        <p>Rp {fare.toLocaleString("DE-de")},00</p>
                                        <p>Rp 1.000,00</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handlePayment}
                                disabled={buffer}
                                style={{ backgroundColor: (buffer ? "" : "#3498DB") }}
                                className={`${buffer ? 'scale-95 bg-blue-200' : ''} hover:scale-95 flex p-3 text-2xl space-x-3 flex-row rounded-full justify-center items-center text-white font-bold`}>
                                <p> {"Bayar"}</p>
                            </button>
                        </div>
                    </div>
            }
        </div >
    )
}