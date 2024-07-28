import { noto_sans } from "@/lib/font";
import Menu from "@/lib/icon/menu";
import { useState } from "react";

export default function NavBar() {
    const [enableMenu, setEnableMenu] = useState(false)

    return (
        <div className="w-full flex flex-col lg:flex-row h-fit">
            <div className="w-1/5 hidden lg:flex">
                <img src="./image/CanPlus_Main_Logo.png" alt="" />
            </div>
            <div style={{ color: "#9A7D0A" }} className={`hidden lg:flex ${noto_sans.className} w-4/5 flex flex-row justify-end space-x-8 items-center`}>
                <ul className={`flex flex-row space-x-6 font-bold text-xl`}>
                    <li className="hover:opacity-50 cursor-pointer">Lokasi</li>
                    <li className="hover:opacity-50 cursor-pointer">Ulasan</li>
                    <li className="hover:opacity-50 cursor-pointer">FAQ</li>
                </ul>
                <div className="text-2xl font-bold">
                    |
                </div>
                <ul className="flex flex-row space-x-6">
                    <li className="hover:underline hover:underline-offset-8 hover:opacity-80 cursor-pointer">Daftar</li>
                    <li className="hover:underline hover:underline-offset-8 hover:opacity-80 cursor-pointer">Masuk</li>
                </ul>
            </div>
            {/* <div className="fixed lg:hidden w-fit flex flex-col">
                <div style={{ backgroundColor: "#9A7D0A" }} className="w-full flex flex-row">
                    <div className={`w-3/12 text-white flex justify-center items-center transition ease-in-out duration-300 ${enableMenu ? 'rotate-90' : ''}`} onClick={e => setEnableMenu(enableMenu != true)}>
                        <Menu size={50} stroke={1} />
                    </div>
                    <div className="w-6/12 p-4 flex items-center">
                        <img src="./image/CanPlus_Main_Logo.png" alt="" />
                    </div>
                </div>
                <div style={{ backgroundColor: "#9A7D0A", margin: `-1px 0px 0px ${enableMenu ? 0 : -400}px` }} className="transition-all duration-700 w-full border-0 flex flex-col space-y-7 p-5 pb-8 justify-center items-center">
                    <div className="font-bold text-white rounded-full text-xl border border-1 pl-28 pr-28 p-3 hover:bg-white hover:text-yellow-700">Masuk</div>
                    <div className="font-bold text-white rounded-full text-xl border border-1 bg-white text-yellow-700 pl-28 pr-28 p-3 hover:bg-transparent hover:text-white">Daftar</div>
                </div>

            </div> */}
        </div >
    )
} 