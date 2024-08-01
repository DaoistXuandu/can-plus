import { main_comment, navbar_logo_link } from "@/app/lib/content/customer/main";
import SearchBar from "./search/searchbar";
import Option from "./option";
import Menu from "@/app/lib/icon/menu";
import { useEffect, useState } from "react";
import Location from "@/app/lib/icon/location";
import Clock from "@/app/lib/icon/clock";
import { data } from "@/app/lib/content/setting";
import { stall } from "@/app/lib/content/customer/restaurant";
import Star from "@/app/lib/icon/star";
import DropDown from "@/app/lib/icon/dropdown";

export default function NavBar() {
    const [statusMenu, setStatusMenu] = useState(false)
    const [zStatus, setZStatus] = useState(true)
    const [menu, setMenu] = useState(0)
    const [menuOption, setMenuOption] = useState(false)

    useEffect(() => {
        if (statusMenu == true)
            setZStatus(false)
        setTimeout(() => {
            if (zStatus == false)
                setZStatus(true)
        }, 800)
    }, [statusMenu])

    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className="fixed z-20 w-full">
            <div className={`fixed z-20 w-full`}>
                <div className="flex bg-white  md:bg-transparent shadow-md md:shadow-none p-5 lg:p-10 lg:pl-16 lg:pr-16 md:p-10 md:pl-10 md:pr-10 flex-col md:flex-row w-full flex items-center justify-center ">
                    <div className="md:relative w-full md:w-4/12 lg:w-3/12 flex items-center">
                        <div className={`w-3/12 md:hidden text-yellow-300 transition ease-in-out duration-700 ${statusMenu ? 'rotate-90' : ''}`} onClick={e => setStatusMenu(statusMenu != true)}>
                            <Menu size={50} stroke={2} />
                        </div>
                        <div className="w-full flex justify-center md:justify-start">
                            <img src={navbar_logo_link} className="w-6/12" alt="" />
                        </div>
                        <div className="w-3/12 md:hidden">
                        </div>
                    </div>
                    <div className="hidden md:flex w-full mt-20 md:mt-0  md:w-6/12 lg:w-7/12 h-full md:mr-12">
                        <SearchBar />
                    </div>
                    <div className="hidden md:flex md:w-3/12 lg:w-2/12">
                        <Option />
                    </div>
                </div>
                <div style={{ marginLeft: (statusMenu ? "0%" : "-100%") }}
                    className="transition-all duration-700 w-10/12 border boder-2 border-gray-200 border-r-0 border-l-0 border-b-0 bg-white text-black shadow-md md:hidden">
                    <div>
                        <Option />
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                <div className="h-28"></div>
                <div className={`relative md:hidden ${zStatus ? 'z-30' : ''} flex p-5 md:hidden`}>
                    <SearchBar />
                </div>
                <div className="w-full flex pt-5 md:pt-12 flex-row items-center ">
                    <div className="
                            w-full md:w-10/12 
                            pl-3 pr-3 md:pr-0 md:pl-10 lg:pl-16
                            text-black 
                            flex flex-row space-x-5 items-center
                        ">
                        <div className="hidden md:flex">
                            <Location size={60} stroke={1} />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="flex flex-row text-sm space-x-2 items-center">
                                    <p><Clock size={20} /></p>
                                    <p>{stall[0].time.open}</p>
                                    <p>-</p>
                                    <p>{stall[0].time.close}</p>
                                    <p>WIB</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row justify-start lg:items-end lg:space-x-2">
                                <div className="flex flex-row">
                                    <p className="font-bold text-4xl">{stall[0].name}</p>
                                    <p className="font-bold text-4xl hidden lg:flex">,</p>
                                </div>
                                <p className="font-light text-lg md:text-2xl">{stall[0].location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

