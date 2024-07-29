import { launching_header } from "@/lib/content/dashboard";
import { noto_sans } from "@/lib/font";

export default function Launching() {
    return (
        <div className={`flex flex-col items-center mt-16 space-y-16 ${noto_sans.className}`}>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-center w-fit h-fit bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 md:to-yellow-800 text-transparent mt-40 md:mt-0">{launching_header}</h1>
            <img src="./image/dashboard_2.png" className="pl-5 pr-5 md:pl-16 md:pr-16 lg:pl-0 lg:pr-0" alt="" />
        </div>
    )

}