import { menu, place, stall } from "@/app/lib/content/customer/restaurant";
import SearchIcon from "@/app/lib/icon/search";

export default function SearchOption() {
    return (
        <div className="w-full max-h-40 md:max-h-56 overflow-scroll flex flex-col mt-8 text-black">
            <div className="flex flex-row space-x-5 w-full hover:bg-gray-300 p-3 lg:p-5 cursor-pointer">
                <img src={stall[0].image} width={50} height={50} className="rounded-lg" alt="" />
                <div className="flex flex-col">
                    <h1 className="font-medium md:text-md lg:text-xl line-clamp-1">{stall[0].name}</h1>
                    <p className="text-xs line-clamp-1">{stall[0].location}</p>
                </div>
            </div>
            <div className="p-3 lg:p-5 md:text-md lg:text-xl flex flex-row space-x-5 items-center hover:bg-gray-300 cursor-pointer">
                <SearchIcon width={25} height={25} stroke={2} />
                <p>{menu[0]}</p>
            </div>
            <div className="p-3 lg:p-5 md:text-md lg:text-xl flex flex-row space-x-5 items-center  hover:bg-gray-300 cursor-pointer">
                <SearchIcon width={25} height={25} stroke={2} />
                <p>{place[0]}</p>
            </div>
            <div className="p-3 lg:p-5 md:text-md lg:text-xl flex flex-row space-x-5 items-center  hover:bg-gray-300 cursor-pointer">
                <SearchIcon width={25} height={25} stroke={2} />
                <p>{place[0]}</p>
            </div>
            <div className="p-3 lg:p-5 md:text-md lg:text-xl flex flex-row space-x-5 items-center  hover:bg-gray-300 cursor-pointer">
                <SearchIcon width={25} height={25} stroke={2} />
                <p>{place[0]}</p>
            </div>
            <div className="p-3 lg:p-5 md:text-md lg:text-xl flex flex-row space-x-5 items-center  hover:bg-gray-300 rounded-b-xl cursor-pointer">
                <SearchIcon width={25} height={25} stroke={2} />
                <p>{place[0]}</p>
            </div>

        </div >
    )
}