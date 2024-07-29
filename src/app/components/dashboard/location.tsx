import { location_body, location_header, location_icon_phone, location_icon_search } from "@/lib/content/dashboard";
import { maven_pro } from "@/lib/font";
import PhoneIcon from "@/lib/icon/phone";
import SearchIcon from "@/lib/icon/search";
import { canPlus_location, canPlus_near } from "@/lib/link";

export default function Location() {
    return (
        <div className={`w-full flex md:flex-row space-x-10 lg:space-x-0 ${maven_pro.className}`}>
            <div className="md:w-1/2 flex flex-col items-center justify-center">
                <h1 style={{ color: "#E0C412" }} className="font-bold text-4xl lg:text-5xl">
                    {location_header}
                </h1>

                <a href={canPlus_location} className="md:hidden pl-5 pr-5 pt-10">
                    <img src="./image/dashboard_3.png" alt="" />
                </a>


                <p className="text-center text-md md:text-xl pl-8 pr-8 lg:text-xl mt-10  lg:pl-16 lg:pr-16">
                    {location_body}
                </p>

                <div className="flex flex-row mt-6 lg:mt-8 space-x-3 lg:space-x-7 text-sm lg:text-md">
                    <a href={canPlus_near} className="flex flex-row lg:space-x-4 border border-yellow-600 text-yellow-600 border-2 pl-6 pr-6 pt-3 pb-3 rounded-full justify-center items-center hover:bg-yellow-600 hover:text-white cursor-pointer">
                        <div className="hidden lg:flex">
                            <SearchIcon width={30} height={30} stroke={2} />
                        </div>
                        <p className="font-bold">{location_icon_search}</p>
                    </a>
                    <div className="flex flex-row lg:space-x-4 bg-yellow-600 text-white border border-2 pl-12 pr-12 pt-3 pb-3 rounded-full justify-center items-center hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 cursor-pointer">
                        <div className="hidden lg:flex">
                            <PhoneIcon width={30} height={30} stroke={2} />
                        </div>
                        <p className="font-bold">{location_icon_phone}</p>
                    </div>
                </div>
            </div>
            <a href={canPlus_location} className="md:w-1/2 hidden md:flex">
                <img src="./image/dashboard_3.png" alt="" />
            </a>
        </div>
    )
}