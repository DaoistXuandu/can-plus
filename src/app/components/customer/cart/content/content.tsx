import { stall } from "@/app/lib/content/customer/restaurant";
import Menu from "./menu";

export default function Content() {
    const menu = stall[0].menu[0].list[0]
    return (
        <div>
            <div className="h-60 md:h-56"></div>
            <div className="text-black pl-5 pr-5 mt-5 md:mt-0 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-8 pb-10">
                {/* <Menu resto={stall[0].name} name={menu.name}  */}
            </div>
        </div>
    )
}