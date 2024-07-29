import { footer_address, footer_hotline, footer_social } from "@/app/lib/content/dashboard";
import { maven_pro } from "@/app/lib/font";
import Instagram from "@/app/lib/icon/instagram";
import Line from "@/app/lib/icon/line";
import Twitter from "@/app/lib/icon/twitter";
import Whatsaap from "@/app/lib/icon/whatsaap";
import Youtube from "@/app/lib/icon/youtube";

export default function Footer() {
    return (
        <div style={{ backgroundColor: "#9A7D0A" }} className={`mt-40 w-full h-fit flex flex-col space-y-20 p-10 md:p-20 pt-16  ${maven_pro.className}`}>
            <div className="w-full md:w-6/12 lg:w-3/12">
                <img src="./image/CanPlus_Main_Logo.png" alt="" />
            </div>
            <div className="flex flex-col md:flex-row text-white space-y-10 md:space-y-0">
                <div className="w-full md:w-7/12 flex flex-col space-y-10">
                    <div>
                        <h1 className="font-bold text-3xl">{footer_address.title}</h1>
                        <p className="text-lg font-normal pr-10">{footer_address.body}</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl mb-2">{footer_hotline.title}</h1>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row space-x-2">
                                <Whatsaap size={30} />
                                <p className="text-lg">{footer_hotline.whatsaap}</p>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <Line size={30} />
                                <p className="text-lg">{footer_hotline.line}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-5/12">
                    <h1 className="font-bold text-3xl mb-2">
                        {footer_social.title}
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-row space-x-2 items-center">
                            <Twitter size={40} />
                            <p className="">{footer_social.twitter}</p>
                        </div>
                        <div className="flex flex-row space-x-2 items-center">
                            <Instagram size={40} />
                            <p>{footer_social.instagram}</p>
                        </div>
                        <div className="flex flex-row space-x-2 items-center">
                            <Youtube size={40} />
                            <p>{footer_social.youtube}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}