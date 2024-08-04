import { logo_url } from "@/app/lib/content/setting";
import Profile from "@/app/lib/icon/profile";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter()
    return (
        <div>
            <div className="flex flex-row">
                <div className="h-fit w-full md:w-4/12 lg:w-2/12 cursor-pointer" onClick={e => router.push("/pages/customer/main")}>
                    <img src={logo_url} alt="" />
                </div>
            </div>
        </div>
    )
}