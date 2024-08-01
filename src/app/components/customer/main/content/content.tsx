import { canteen } from "@/app/lib/content/customer/canteen";
import Area from "./area";
import Stall from "./stall";
import { stall } from "@/app/lib/content/customer/restaurant";

export default function Content({ content }: {
    content: {
        type: number,
        url: string,
        address: string,
        name: string
    }[]
}) {
    return (
        <div className="flex flex-col pb-24 pl-10 pr-10 lg:pl-16 lg:pr-16">
            <div className="h-80 md:h-72"></div>
            <div className="relative z-0 overflow-hidden flex flex-col md:flex-row md:flex-wrap gap-12">
                {
                    content.map(item => (
                        (item.type == 0 ?
                            <Area url={canteen[0].url} address={canteen[0].address} name={canteen[0].name} />
                            :
                            <Stall name={stall[0].name} location={stall[0].location} description={stall[0].description} rating={stall[0].rating} image_background={stall[0].image} image_profile={stall[0].menu[0].list[0].image} />
                        )
                    ))
                }
            </div>
        </div >
    )
}