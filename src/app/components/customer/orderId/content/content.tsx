import Menu from "./menu";
import { bill, delivery, main } from "@/app/lib/content/customer/cart";
import { useEffect, useState } from "react";
import { orderChangeCustomer, orderGetAll } from "@/app/controller/order";
import { paymentCreateClient, paymentGet, paymentVerify } from "@/app/controller/payment";
import { useRouter } from "next/navigation";
import { customerGetTransaction, customerUpdateMerchant } from "@/app/controller/customer";
import { transactionCreate, transactionDelete, transactionGet, transactionUpdateStatus } from "@/app/controller/transaction";
import { status } from "@/app/lib/content/customer/order";
import { data } from "@/app/lib/content/setting";
import exp from "constants";
import { error_alert, ok_alert } from "@/app/lib/alert";
import { Titillium_Web } from "next/font/google";

export default function Content({ id }: { id: string }) {

    const [imgSrc, setImgSrc] = useState("")
    const [expire, setExpire] = useState("")

    const [buffer, setBuffer] = useState(false)
    const router = useRouter()

    async function getTransaction(transaction: string) {
        setBuffer(true)
        const data = await transactionGet(transaction)
        const test = await paymentVerify(data.transaction.midtransId);

        if (test.payment.status_code >= 200 && test.payment.status_code < 300) {
            let time = test.payment.expiry_time.split(" ")[1]
            time = time.split(":")
            time = time[0] + ":" + time[1]
            const state = test.payment.transaction_status

            if (state == 'expire') {
                await transactionUpdateStatus(data.transaction._id, 0)
                error_alert("Transaksi Telah Kadaluarsa")
                router.push("/pages/customer/order")
            }
            else if (state == 'settlement') {
                await transactionUpdateStatus(data.transaction._id, 2)
                ok_alert("Pembayaran Berhasil", "Untuk informasi terupdate bisa bertanya pada chat..")
                router.push("/pages/customer/order")
            }

            setExpire(time)
            setImgSrc(data.transaction.link)
            setBuffer(false)
        }
    }

    useEffect(() => {
        getTransaction(id)
    }, [id])


    return (
        <div className="min-h-full space-y-10 flex flex-col justify-center items-center">
            <div className="flex flex-col text-black justify-center items-center space-y-4">
                <p> <b>Maksimal Hingga: </b> {expire}</p>
                <img src={imgSrc} className="max-w-96 aspect-square" alt="" />
            </div>
            <button onClick={e => getTransaction(id)} className={`text-white pl-24 pr-24 p-3 text-2xl font-bold bg-blue-500 rounded-xl hover:bg-blue-300 ${buffer ? 'bg-blue-300 scale-95' : ''}`}>Konfirmasi</button>
        </div >
    )
}