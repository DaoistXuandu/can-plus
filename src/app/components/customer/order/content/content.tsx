import { stall } from "@/app/lib/content/customer/restaurant";
import Order from "./order";
import { useState } from "react";
import { order } from "@/app/lib/content/customer/order";

export default function Content() {
    const menu = stall[0].menu[0].list[0]
    const [choice, setchoice] = useState(0)
    return (
        <div>
            {/* <div className="h-60 md:h-52"></div> */}
            <div>
                <div className="text-black pl-5 pr-5 mt-16 md:mt-10 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-4 pb-16">
                    {order.map((item, index) => (
                        <div className={`border border-${index != order.length - 1 ? 1 : 0} border-t-0 border-r-0 border-l-0 border-gray-300 pb-4`}>
                            <Order orderIndex={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}