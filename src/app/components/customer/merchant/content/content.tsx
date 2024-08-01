import { stall } from "@/app/lib/content/customer/restaurant";
import Section from "./section";

export default function Content() {
    return (
        <div>
            <div className="h-96 md:h-80"></div>
            <div className="text-black pl-5 pr-5 mt-5 md:mt-0 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-8 pb-10">
                {
                    stall[0].menu.map((section, index) => (
                        <div>
                            <Section index={index} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}