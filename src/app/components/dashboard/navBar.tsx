import { navbar_auth, navbar_link } from "@/app/lib/content/dashboard";
import { noto_sans } from "@/app/lib/font";
import Menu from "@/app/lib/icon/menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const [enableMenu, setEnableMenu] = useState(false)
    const router = useRouter()
    return (
        <div className={`w-full flex flex-col md:flex-row h-fit ${noto_sans.className}`}>
            <div className="w-1/5 hidden md:flex cursor-pointer" onClick={e => router.push("/")}>
                <img src="./image/CanPlus_Main_Logo.png" alt="" />
            </div>
            <div style={{ color: "#9A7D0A" }} className={`hidden md:flex w-4/5 flex flex-row justify-end space-x-8 items-center`}>
                <ul className={`flex flex-row space-x-6 font-bold text-xl`}>
                    <li className="hover:opacity-50 cursor-pointer">{navbar_link.location.comment}</li>
                    <li className="hover:opacity-50 cursor-pointer">{navbar_link.review.comment}</li>
                    <li className="hover:opacity-50 cursor-pointer">{navbar_link.faq.comment}</li>
                </ul>
                <div className="text-2xl font-bold">
                    |
                </div>
                <ul className="flex flex-row space-x-6">
                    <li className="hover:underline hover:underline-offset-8 hover:opacity-80 cursor-pointer"><a href={navbar_auth.login.url}>{navbar_auth.login.comment}</a></li>
                    <li className="hover:underline hover:underline-offset-8 hover:opacity-80 cursor-pointer"><a href={navbar_auth.signup.url}>{navbar_auth.signup.comment}</a></li>
                </ul>
            </div>
            <div className="fixed md:hidden w-fit flex flex-col">
                <div style={{ backgroundColor: "#9A7D0A" }} className="w-full flex flex-row shadow-xl">
                    <div className={`w-3/12 text-white flex justify-center items-center transition ease-in-out duration-300 ${enableMenu ? 'rotate-90' : ''}`} onClick={e => setEnableMenu(enableMenu != true)}>
                        <Menu size={50} stroke={1} />
                    </div>
                    <div className="w-6/12 p-4 flex items-center">
                        <img src="./image/CanPlus_Main_Logo.png" alt="" />
                    </div>
                </div>
                <div style={{ backgroundColor: "#9A7D0A", marginTop: `-1px`, marginLeft: `${enableMenu ? '0%' : '-100%'}` }} className="transition-all duration-700 w-full border-0 flex flex-col space-y-7 p-5 pb-8 justify-center items-center">
                    <a href="/pages/login" className="font-bold text-white rounded-full text-xl border border-1 pl-28 pr-28 p-3 hover:bg-white hover:text-yellow-700">Masuk</a>
                    <a href="/pages/signUp" className="font-bold text-white rounded-full text-xl border border-1 bg-white text-yellow-700 pl-28 pr-28 p-3 hover:bg-transparent hover:text-white">Daftar</a>
                </div>

            </div>
        </div >
    )
} 