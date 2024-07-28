import { launching_header } from "@/lib/content/dashboard";
import { noto_sans } from "@/lib/font";

export default function Launching() {
    return (
        <div className={`flex flex-col items-center mt-16 space-y-16 ${noto_sans.className}`}>
            <h1 className="font-bold text-7xl w-fit h-fit bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent">{launching_header}</h1>
            <img src="./image/dashboard_2.png" alt="" />
        </div>
    )

}