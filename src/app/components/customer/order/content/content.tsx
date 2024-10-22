import Order from "./order";
import { useEffect, useState } from "react";
import { transactionGetAll } from "@/app/controller/transaction";
import { paymentVerify } from "@/app/controller/payment";

export default function Content() {
    const [order, setOrder] = useState<{ _id: string, total: number, time: string, midtransId: string, createdAt: Date }[]>([])

    async function getTransaction() {
        const data = await transactionGetAll()
        console.log(data)
        setOrder(data.transaction)
    }

    useEffect(() => {
        getTransaction()
    }, [])

    return (
        <div>
            <div className="text-black pl-5 pr-5 mt-16 md:mt-10 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-4 pb-16">
                {Array.isArray(order) && order.length > 0 ? (
                    order.map((item, index) => (
                        <div key={index} className={`border border-${index !== order.length - 1 ? 1 : 0} border-t-0 border-r-0 border-l-0 border-gray-300 pb-4`}>
                            <Order id={item._id} total={item.total} time={item.time} midtrans={item.midtransId} />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-3xl">Tidak ada riwayat transaksi.</p>
                )}
            </div>
        </div>
    )
}   