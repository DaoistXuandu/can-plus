import { intro_body, intro_button, intro_header } from "@/lib/content/dashboard";
import { maven_pro } from "@/lib/font";

export default function Intro() {
    return (
        <div className={`w-full h-fit flex flex-row mt-24 ${maven_pro.className}`}>
            <div className="w-6/12 pl-8 flex justify-center">
                <img src="./image/dashboard_1.png" className="rounded-xl" alt="" />
            </div>
            <div className="w-6/12 text-center items-center flex flex-col mt-8">
                <h1 style={{ color: "#E0C412" }} className="font-bold text-4xl">{intro_header}</h1>
                <p className="pl-24 pr-24 text-2xl mt-5">{intro_body}</p>
                <div style={{ backgroundColor: "#F1C40F" }} className="hover:scale-105 shadow-md cursor-pointer mt-8 pt-3 pb-3 pl-7 pr-7 rounded-3xl w-fit flex text-center font-bold text-white text-xl">{intro_button}</div>
            </div>
        </div>
    )
}