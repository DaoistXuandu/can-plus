import { stall } from "@/app/lib/content/customer/restaurant";
import Order from "./order";
import { useState } from "react";
import { order } from "@/app/lib/content/customer/order";

export default function Content() {
    const menu = stall[0].menu[0].list[0]
    const [choice, setchoice] = useState(0)
    const [process, setProcess] = useState(0)

    const processList = [
        "Menunggu Konfirmasi",
        "Sedang Diproses",
        "Sudah Selesai"
    ]

    return (
        <div>
            <div>
                <div className="text-black pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-4 pb-16">
                    <ul className="flex flex-row space-x-5">
                        {
                            processList.map((item, index) => (
                                <li className={`ring-1 ring-yellow-500 rounded-2xl p-3 font-medium cursor-pointer ${process == index ? 'bg-yellow-500 text-white' : 'text-yellow-500 hover:ring-yellow-400 hover:bg-yellow-400 hover:text-white'}`} onClick={e => (setProcess(index))}>{item}</li>
                            ))
                        }
                    </ul>
                    {order.map((item, index) => (
                        <div className={`border border-${index != order.length - 1 ? 1 : 0} border-t-0 border-r-0 border-l-0 border-gray-300 pb-4`}>
                            <Order orderIndex={process} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}