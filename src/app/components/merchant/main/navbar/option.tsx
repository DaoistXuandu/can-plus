import { customerLogOut } from "@/app/controller/customer";
import { navbar_option } from "@/app/lib/content/customer/main";
import Bill from "@/app/lib/icon/bill";
import Home from "@/app/lib/icon/home";
import LogOut from "@/app/lib/icon/logout";
import Profile from "@/app/lib/icon/profile";
import ProfileCircle from "@/app/lib/icon/profilecircle";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Option() {
    const [setting, setSetting] = useState(false)
    const [small, setSmall] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 760)
            setSmall(true)
    }, [small])

    const router = useRouter()

    async function handleLogOut() {
        const logout = await customerLogOut()
        router.push("/")
    }

    return (
        <div className="w-full flex flex-col md:flex-row md:space-x-4 justify-end">
            <div className={`p-4 md:p-0 flex ${small ? "hover:bg-gray-200" : ""} flex-row md:flex-col items-center space-x-5`}
                onClick={e => router.push("/pages/merchant/main")}>
                <div className="p-3 lg:p-4 w-fit rounded-full md:bg-yellow-500 hover:scale-90 hover:text-yellow-500 hover:bg-transparent hover:ring-inset hover:ring-2 hover:ring-yellow-500 cursor-pointer">
                    <Home size={25} stroke={2} />
                </div>
                <p className="font-medium text-lg md:hidden">Toko</p>
            </div>
            <div className={`p-4 md:p-0 flex flex-row ${small ? "hover:bg-gray-200" : ""} md:flex-col items-center space-x-5 border boder-2 border-gray-200 border-r-0 border-l-0 md:border-0`}
                onClick={e => router.push("/pages/merchant/order")}>
                <div className="p-3 lg:p-4 w-fit rounded-full md:bg-yellow-500 hover:scale-90 hover:text-yellow-500 hover:bg-transparent hover:ring-inset hover:ring-2 hover:ring-yellow-500 cursor-pointer">
                    <Bill size={25} stroke={2} />
                </div>
                <p className="font-medium text-lg md:hidden">Pesanan</p>
            </div>
            <div
                className={`relative p-4 md:p-0 flex ${small ? "hover:bg-gray-200" : ""} flex-row md:flex-col items-center space-x-5`}
                onClick={e => (small ? router.push("/pages/user/setting") : small)}>
                <div
                    className="p-3 lg:p-4 w-fit rounded-full md:bg-yellow-500 hover:scale-90 hover:text-yellow-500 hover:bg-transparent hover:ring-inset hover:ring-2 hover:ring-yellow-500 cursor-pointer"
                    onClick={e => setSetting(setting != true)}>
                    <Profile size={25} stroke={2} />
                </div>
                <div
                    style={{ marginRight: (setting ? "0%" : "-1000%") }}
                    className="transition-all duration-600 hidden md:flex absolute z-50 top-full right-0 pt-5">
                    <div className="flex flex-col bg-yellow-400 rounded-2xl select-none">
                        <div
                            className="flex flex-row hover:bg-yellow-300 rounded-t-2xl items-center space-x-2 p-3 cursor-pointer"
                            onClick={e => router.push("/pages/user/setting")}>
                            <ProfileCircle size={30} stroke={2} />
                            <p className="font-medium">
                                Pengaturan
                            </p>
                        </div>
                        <div
                            className="flex flex-row hover:bg-yellow-300 rounded-b-2xl items-center p-3 space-x-2 cursor-pointer border boder-1 border-gray-100 border-l-0 border-r-0 border-b-0"
                            onClick={handleLogOut}>
                            <LogOut size={30} stroke={2} />
                            <p className="font-medium">Keluar</p>
                        </div>
                    </div>
                </div>
                <p className="font-medium text-lg md:hidden">{navbar_option.profile}</p>
            </div>
        </div >
    )
}