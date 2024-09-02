import { navbar_search_comment } from "@/app/lib/content/customer/main";
import SearchIcon from "@/app/lib/icon/search";
import SearchResult from "./searchresult";
import { useState } from "react";

export default function SearchBar() {
    const [active, setActive] = useState(false)

    return (
        <div className="relative w-full h-full">
            <div className={`${active ? "" : "hidden"} absolute top-1/2 z-0 w-full`}>
                <SearchResult />
            </div>
            <div className="relative z-10 top-0 left-0 w-full flex items-center " onClick={e => setActive(active != true)}>
                <div className="absolute left-6 h-full flex items-center">
                    <SearchIcon width={30} height={30} stroke={2} />
                </div>
                <input
                    style={{ backgroundColor: "#F7DC6F" }}
                    className="
                    rounded-full 
                    pl-20 pr-10 p-4 
                    w-full 
                    text-white 
                    placeholder:text-white placeholder:opacity-75
                    lg:text-lg font-medium 
                    flex flex-row items-center space-x-5 
                    focus:outline-none 
                    focus:ring-inset focus:ring-2 focus:ring-yellow-400 
                    transition ease-in-out duration-200"
                    placeholder={navbar_search_comment} />
            </div>
        </div>
    )
}