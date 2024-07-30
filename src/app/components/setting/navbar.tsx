import { logo_url } from "@/app/lib/content/setting";
import Profile from "@/app/lib/icon/profile";

export default function NavBar() {
    return (
        <div>
            <div className="flex flex-row">
                <div className="h-fit w-2/12">
                    <img src={logo_url} alt="" />
                </div>
                <div className="w-10/12 text-white flex justify-end">
                    <div className="w-fit h-fit p-5 bg-yellow-500 rounded-full hover:ring-inset hover:ring-2 hover:ring-yellow-500 cursor-pointer hover:bg-transparent hover:text-yellow-500">
                        <Profile size={30} stroke={2} />
                    </div>
                </div>
            </div>
        </div>
    )
}