import { stall } from "@/app/lib/content/customer/restaurant";
import Menu from "./menu";
import { bill, delivery, main } from "@/app/lib/content/customer/cart";
import Choice from "./choice";
import { useEffect, useState } from "react";
import { orderGetAll } from "@/app/controller/order";
import { paymentGet } from "@/app/controller/payment";

export default function Content() {

    const [menu, setMenu] = useState<{ _id: string, menuId: string }[]>([])
    const [choice, setchoice] = useState(0)
    const [total, setTotal] = useState(0)
    const [food, setFood] = useState(0)
    const [fare, setFare] = useState(0)

    async function getMenu() {
        const data = await orderGetAll()
        setMenu(data)
    }

    async function getPrice() {
        const data = await paymentGet()
        setTotal(data.total.toLocaleString("DE-de"))
        setFare(data.delivery.toLocaleString("DE-de"))
        setFood(data.food.toLocaleString("DE-de"))
    }

    useEffect(() => {
        getMenu()
        getPrice()
    }, [])


    return (
        <div>
            <div>
                <div className="relative text-black pl-5 pr-5 mt-8 md:mt-10 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-4 pb-16">
                    <h1 className="font-bold text-3xl md:text-4xl">{main.section}</h1>
                    <div className="flex flex-col space-y-8">
                        {
                            menu.map(item => (
                                <Menu id={item.menuId} orderId={item._id} />
                            ))
                        }
                    </div>
                </div>
                <div className="text-black pl-5 pr-5 mt-5 md:mt-5 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-5 pb-10">
                    <h1 className="font-bold text-3xl md:text-4xl">{delivery.title}</h1>
                    <div className="flex lg:flex-row lg:space-x-8 flex-col space-y-4 lg:space-y-0">
                        <Choice name={delivery.type[0]} index={0} choice={choice} setStatus={setchoice} />
                        <Choice name={delivery.type[1]} index={1} choice={choice} setStatus={setchoice} />
                        <Choice name={delivery.type[2]} index={2} choice={choice} setStatus={setchoice} />
                    </div>
                </div>
                <div className="text-black pl-5 pr-5 mt-10 md:mt-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-10 pb-10">
                    <div className="flex flex-col space-y-2">
                        <h1 className="font-bold text-3xl md:text-4xl">{bill.title}</h1>
                        <h1 className="font-bold text-4xl md:text-6xl">Rp {total},00</h1>
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
                            </div>
                            <div>
                                <p>Rp {food},00</p>
                                <p>Rp {fare},00</p>
                            </div>
                        </div>
                    </div>
                    <button
                        style={{ backgroundColor: "#3498DB" }}
                        className="hover:scale-95 flex p-2 text-2xl space-x-3 flex-row rounded-full justify-center items-center text-white font-bold">
                        <img src={bill.url} alt="" />
                        <p>{bill.button_comment}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}