import { location_body, location_header, location_icon_phone, location_icon_search } from "@/lib/content/dashboard";
import { maven_pro } from "@/lib/font";
import PhoneIcon from "@/lib/icon/phone";
import SearchIcon from "@/lib/icon/search";
import { canPlus_location, canPlus_near } from "@/lib/link";

export default function Location() {
    return (
        <div className={`w-full flex flex-row ${maven_pro.className}`}>
            <div className="w-1/2 flex flex-col items-center p-16">
                <h1 style={{ color: "#E0C412" }} className="font-bold text-5xl">
                    {location_header}
                </h1>
                <p className="text-center text-3xl mt-5">
                    {location_body}
                </p>

                <div className="flex flex-row mt-8 space-x-7">
                    <a href={canPlus_near} className="flex flex-row space-x-4 border border-yellow-600 text-yellow-600 border-2 pl-6 pr-6 pt-3 pb-3 rounded-full justify-center items-center text-md hover:bg-yellow-600 hover:text-white cursor-pointer">
                        <SearchIcon width={30} height={30} stroke={2} />
                        <p className="font-bold">{location_icon_search}</p>
                    </a>
                    <div className="flex flex-row space-x-4 bg-yellow-600 text-white border border-2 pl-12 pr-12 pt-3 pb-3 rounded-full justify-center items-center text-md hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 cursor-pointer">
                        <PhoneIcon width={30} height={30} stroke={2} />
                        <p className="font-bold">{location_icon_phone}</p>
                    </div>
                </div>
            </div>
            <a href={canPlus_location} className="w-1/2">
                <img src="./image/dashboard_3.png" alt="" />
            </a>
        </div>
    )
}