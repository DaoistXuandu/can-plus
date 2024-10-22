import { launching_header } from "@/app/lib/content/dashboard";
import { noto_sans } from "@/app/lib/font";

export default function Launching() {
    return (
        <div className={`flex flex-col items-center mt-16 space-y-16 ${noto_sans.className}`}>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-center w-fit h-fit bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 md:to-yellow-800 text-transparent mt-40 md:mt-0">{launching_header}</h1>
            {/* <iframe width="420" height="315"
                src="https://www.youtube.com/embed/watch?v=LIrgv3mQH_s">
            </iframe> */}
            <iframe width="850" height="450"
                src="https://www.youtube.com/embed/LIrgv3mQH_s?autoplay=1&mute=1">
            </iframe>


            {/* <a href="https://www.youtube.com/watch?v=LIrgv3mQH_s"><img src="./image/dashboard_2.png" className="pl-5 pr-5 md:pl-16 md:pr-16 lg:pl-0 lg:pr-0" alt="" />
            </a> */}
        </div>
    )

}