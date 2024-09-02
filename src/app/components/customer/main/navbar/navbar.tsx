import { main_comment, navbar_logo_link } from "@/app/lib/content/customer/main";
import SearchBar from "./search/searchbar";
import Option from "./option";
import Menu from "@/app/lib/icon/menu";
import { useEffect, useState } from "react";
import Suggestion from "./suggestion";
import { useRouter } from "next/navigation";

export default function NavBar({ type }: { type: number }) {
    const [statusMenu, setStatusMenu] = useState(false)
    const [zStatus, setZStatus] = useState(true)

    const router = useRouter()

    useEffect(() => {
        if (statusMenu == true)
            setZStatus(false)
        setTimeout(() => {
            if (zStatus == false)
                setZStatus(true)
        }, 800)
    }, [statusMenu])

    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className="z-50 w-full">
            <div className={`fixed z-20 w-full`}>
                <div style={{ backgroundColor: "#ECF0F1" }} className="flex bg-white  md:bg-transparent shadow-md md:shadow-none p-5 lg:p-10 lg:pl-16 lg:pr-16 md:p-10 md:pl-10 md:pr-10 flex-col md:flex-row w-full flex items-center justify-center ">
                    <div className="md:relative w-full md:w-4/12 lg:w-3/12 flex items-center">
                        <div className={`w-3/12 md:hidden text-yellow-300 transition ease-in-out duration-700 ${statusMenu ? 'rotate-90' : ''}`} onClick={e => setStatusMenu(statusMenu != true)}>
                            <Menu size={50} stroke={2} />
                        </div>
                        <div className="w-full cursor-pointer flex justify-center md:justify-start" onClick={e => router.push("/pages/customer/main")}>
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
                    className="absolute transition-all duration-700 w-10/12 border boder-2 border-gray-200 border-r-0 border-l-0 border-b-0 bg-white text-black shadow-md md:hidden">
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
                <div className={`hidden md:flex relative ${zStatus ? 'z-30 md:z-0' : ''} `}>
                    <Suggestion />
                </div>
                <div className="pl-5 pr-5 text-center md:text-left md:pl-12 md:pr-12 lg:pl-16 lg:pr-16 p-2 text-black font-medium text-3xl">
                    <h1>{main_comment[type]}</h1>
                </div>
            </div>
        </div >
    )
}

