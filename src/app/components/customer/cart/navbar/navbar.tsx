import { main_comment, navbar_logo_link } from "@/app/lib/content/customer/main";
import SearchBar from "./search/searchbar";
import Option from "./option";
import Menu from "@/app/lib/icon/menu";
import { useEffect, useState } from "react";
import Location from "@/app/lib/icon/location";
import Clock from "@/app/lib/icon/clock";
import { data } from "@/app/lib/content/setting";
import Star from "@/app/lib/icon/star";
import DropDown from "@/app/lib/icon/dropdown";
import Shop from "@/app/lib/icon/shop";
import { main } from "@/app/lib/content/customer/cart";
import { useRouter } from "next/navigation";
import { customerGetMerchant } from "@/app/controller/customer";
import { useFormState } from "react-dom";
import { merchantGet } from "@/app/controller/merchant";

export default function NavBar() {
    const [statusMenu, setStatusMenu] = useState(false)
    const [zStatus, setZStatus] = useState(true)
    const [menu, setMenu] = useState(0)
    const [menuOption, setMenuOption] = useState(false)
    const [merchant, setMerchant] = useState<{ name: string, canteen: string }>({ name: "", canteen: "" })
    const router = useRouter()

    async function getMerchant() {
        const merchantData = await customerGetMerchant()
        const currentMerchant = await merchantGet(merchantData)
        setMerchant(currentMerchant)
    }

    useEffect(() => {
        getMerchant()
    }, [])

    useEffect(() => {
        if (statusMenu == true)
            setZStatus(false)
        setTimeout(() => {
            if (zStatus == false)
                setZStatus(true)
        }, 800)
    }, [statusMenu])


    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className=" w-full pb-3">
            <div className={`fixed z-50 w-full`}>
                <div style={{ backgroundColor: "#ECF0F1" }} className="flex bg-white  md:bg-transparent shadow-md md:shadow-none p-5 lg:p-10 lg:pb-5 lg:pl-16 lg:pr-16 md:p-10 md:pl-10 md:pr-10 flex-col md:flex-row w-full flex items-center justify-center ">
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
                    className={`absolute z-50 transition-all duration-700 w-10/12 border boder-2 border-gray-200 border-r-0 border-l-0 border-b-0 bg-white text-black shadow-md md:hidden`}>
                    <div>
                        <Option />
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                <div className="h-28"></div>
                <div className={`relative md:hidden ${zStatus ? '' : ''} flex p-5 md:hidden`}>
                    <SearchBar />
                </div>
                <div className="w-full flex pt-3 md:pt-8 flex-row items-center ">
                    <div className="
                            w-full md:w-10/12 
                            pl-5 pr-5 md:pr-0 md:pl-10 lg:pl-16
                            text-black 
                            flex flex-row md:space-x-6 items-center
                        ">
                        <div className="hidden md:flex">
                            <Shop size={80} stroke={1} />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <h1 className="font-bold text-4xl md:text-5xl">{main.title}</h1>
                            <div
                                className="
                                    text-black
                                    flex flex-col md:flex-row justify-start md:items-end md:space-x-3
                                ">
                                <div className="flex flex-row">
                                    <h1 className="font-medium text-2xl">{merchant.name}</h1>
                                    <p className="hidden md:flex font-medium text-xl md:text-2xl">,</p>
                                </div>
                                <p className="text-lg">{merchant.canteen}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

