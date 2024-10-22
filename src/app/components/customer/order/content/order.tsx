import { useEffect, useState } from "react";
import { status, status_comment } from "@/app/lib/content/customer/order";
import Check from "@/app/lib/icon/check";
import { transactionGet } from "@/app/controller/transaction";
import { orderGetAllTransaction } from "@/app/controller/order";
import { menuGet } from "@/app/controller/menu";
import { sectionGet } from "@/app/controller/section";
import { merchantGet } from "@/app/controller/merchant";
import { comment } from "postcss";
import { paymentVerify } from "@/app/controller/payment";
import { delivery } from "@/app/lib/content/customer/cart";
import { Condiment } from "next/font/google";

export default function Order({ id, total, time, midtrans }
    :
    {
        id: string,
        total: number,
        time: string,
        midtrans: string,
    }
) {
    const [merchant, setMerchant] = useState("")
    const [currentStatus, setCurrentStatus] = useState(1);
    const [order, setOrder] = useState<{ name: string, price: string, comment: string, quantity: number }[]>([])
    const [pickup, setPickup] = useState(false)

    async function getOrder(transactionId: string) {
        const orders = await orderGetAllTransaction(transactionId)
        const data = await transactionGet(transactionId)
        const status = data.transaction.status
        setCurrentStatus(status)
        if (data.transaction.delivery != null) {
            setPickup(data.transaction.delivery)
        }

        const current_order = []


        for (const order of orders) {
            const menu = await menuGet(order.menuId)
            let section = menu.sectionId
            section = await sectionGet(section)
            let current_merchant = await merchantGet(section.merchantId)
            setMerchant(current_merchant.name)

            const data = {
                name: menu.name,
                price: menu.price,
                comment: order.comment,
                quantity: order.quantity
            }
            current_order.push(data)
        }

        setOrder(current_order.reverse())
    }

    useEffect(() => {
        getOrder(id)
    }, [id])

    return (
        <div className="flex flex-col justify-center w-full">
            <h1 className="font-bold text-3xl">{merchant}</h1>
            <div className="space-y-1 mt-1">
                <div className="flex flex-row items-center">
                    <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[0]}</p>
                    <p>:</p>
                    <p className="ml-4 font-medium text-md md:text-lg">Rp {total.toLocaleString("DE-de")}</p>
                </div>
                <div className={`flex flex-row items-center ${pickup ? '' : 'hidden'}`}>
                    <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[5]}</p>
                    <p>:</p>
                    <p className="ml-4 font-medium text-md md:text-lg">Rp {3.000}</p>
                </div>
                <div className="flex flex-row items-center">
                    <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">Biaya Layanan</p>
                    <p>:</p>
                    <p className="ml-4 font-medium text-md md:text-lg">Rp {1.000}</p>
                </div>
                <div className="flex flex-row items-center">
                    <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[1]}</p>
                    <p>:</p>
                    <p className="ml-4 font-medium text-md md:text-lg">{time}</p>
                </div>
                <div className="flex flex-row">
                    <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[2]}</p>
                    <p>:</p>
                    <div className="w-8/12 md:w-10/12 flex flex-col">
                        <p style={{ color: status[currentStatus].color }} className="ml-4 font-medium text-md md:text-lg">
                            {status[currentStatus].comment} {(currentStatus == 1 ? <a className="font-bold text-red-400" href={`/pages/customer/order/${id}`}> - Selesaikan Pembayaran</a> : "")}
                        </p>
                        <div className={`${currentStatus == 3 ? '' : 'hidden'}`}>
                            <button
                                onClick={e => setCurrentStatus(currentStatus + 1)}
                                className="hover:font-bold ml-4 text-sm flex flex-row items-center space-x-3">
                                <p>
                                    {status_comment.main}
                                </p>
                                <div className="text-green-600">
                                    <Check size={15} stroke={4} />
                                </div>
                            </button>
                            <div className="flex flex-row ml-4 text-xs">
                                <p className="text-red-400">*</p>
                                <p>{status_comment.secondary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://wa.me/6285157860551" className={`${currentStatus < 2 ? 'hidden' : ''} flex flex-row items-center  cursor-pointer`}>
                    <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">Chat dengan {pickup ? 'kurir' : 'penjual'}</p>
                    <p>:</p>
                    <p className="ml-4 font-medium text-md md:text-lg cursor-pointer font-black">wa.me/6285157860551</p>
                </a>
                <div className="flex flex-row items-center">
                    <p className="w-2/12 font-medium text-lg md:text-xl">{status_comment.section[3]}</p>
                    <p>:</p>
                </div>
                <div>
                    <div className="flex flex-col space-y-8 mt-1">
                        {
                            (
                                Array.isArray(order) && order.length > 0 ?
                                    order.map((item, index) => (
                                        <div className="flex flex-row items-start space-x-3">
                                            <div className="w-fit font-bold text-lg">
                                                {index + 1}.
                                            </div>
                                            <div className="w-full h-full flex flex-col space-y-2">
                                                <div className="flex flex-row justify-between">
                                                    <div>
                                                        <p className="font-bold text-lg">{item.name}</p>
                                                        <p className="font-medium text-md">Rp {parseFloat(item.price).toLocaleString("DE-de")},00</p>
                                                    </div>
                                                    <div>
                                                        <p>X {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{status_comment.section[4]}:</p>
                                                    <p>{item.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : ""
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}