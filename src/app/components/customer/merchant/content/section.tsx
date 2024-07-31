import { stall } from "@/app/lib/content/customer/restaurant";
import Menu from "./menu";
import { noto_sans } from "@/app/lib/font";

export default function Section({ index }: { index: number }) {
    return (
        <div className="flex flex-col space-y-4">
            <h1 className={`select-none font-bold text-2xl ${noto_sans.className}`}>{stall[0].menu[index].section}</h1>
            <div className="flex flex-col space-y-3">
                {
                    stall[0].menu[index].list.map(item => (
                        <Menu name={item.name} price={item.price} image={item.image} quantity={() => { }} />
                    ))
                }
            </div>
        </div>
    )
}