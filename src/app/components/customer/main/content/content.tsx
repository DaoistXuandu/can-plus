import { useEffect, useState } from "react";
import { canteenGetByKeyword } from "@/app/controller/canteen";
import { merchantGet } from "@/app/controller/merchant";
import Area from "./area";
import Stall from "./stall";

export default function Content({ content }: {
    content: {
        type: string,
        url: string,
    }[]
}) {

    return (
        <div className="flex flex-col pb-24 pl-10 pr-10 lg:pl-16 lg:pr-16">
            {/* <div className="h-80 md:h-72"></div> */}
            <div className="relative z-0 overflow-hidden flex flex-col md:flex-row md:flex-wrap gap-12">
                {
                    (content.length > 0 ?
                        content.map(item => (
                            // <div>{item.url}  {item.type}</div>
                            (item.type == "canteen" ?
                                <Area id={item.url} />
                                :
                                <Stall id={item.url} />
                            )
                        ))
                        :
                        ""
                    )
                }
            </div>
        </div >
    )
}