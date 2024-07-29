import { intro_body, intro_button, intro_header } from "@/lib/content/dashboard";
import { maven_pro } from "@/lib/font";

export default function Intro() {
    return (
        <div className={`w-full h-fit flex flex-row mt-24 md:mt-16 ${maven_pro.className}`}>
            <div className="hidden lg:flex lg:w-6/12 lg:pl-8 justify-center">
                <img src="./image/dashboard_1.png" className="rounded-xl" alt="" />
            </div>
            <div className={`lg:w-6/12 text-center items-center flex flex-col mt-32 lg:mt-1 space-y-3 lg:space-y-4`} >
                <h1 style={{ color: "#E0C412" }} className="font-bold text-6xl lg:text-5xl">{intro_header}</h1>
                <p className="font-thin text-white md:text-black pl-5 pr-5 lg:pl-24 lg:pr-24 text-xl lg:text-2xl">{intro_body}</p>
                <div className="w-full flex justify-center">
                    <div style={{ backgroundColor: "#F1C40F" }} className="hover:scale-105 shadow-lg cursor-pointer pt-3 pb-3 pl-10 mt-10 md:mt-3 pr-10 rounded-3xl w-fit flex text-center font-bold text-white text-xl">{intro_button}</div>
                </div>
            </div >
        </div >
    )
}