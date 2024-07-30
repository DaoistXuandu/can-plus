import { navbar_option } from "@/app/lib/content/customer/main";
import Cart from "@/app/lib/icon/cart";
import Delivery from "@/app/lib/icon/delivery";
import Profile from "@/app/lib/icon/profile";

export default function Option() {
    return (
        <div className="w-full flex flex-col md:flex-row md:space-x-4 justify-end">
            <div className="p-4 md:p-0 flex flex-row md:flex-col items-center space-x-5">
                <div className="p-3 lg:p-4 w-fit rounded-full md:bg-yellow-500 hover:scale-90 hover:text-yellow-500 hover:bg-transparent hover:ring-inset hover:ring-2 hover:ring-yellow-500 cursor-pointer">
                    <Delivery size={25} stroke={2} />
                </div>
                <p className="font-medium text-lg md:hidden">{navbar_option.delivery}</p>
            </div>
            <div className="p-4 md:p-0 flex flex-row md:flex-col items-center space-x-5 border boder-2 border-gray-200 border-r-0 border-l-0">
                <div className="p-3 lg:p-4 w-fit rounded-full md:bg-yellow-500 hover:scale-90 hover:text-yellow-500 hover:bg-transparent hover:ring-inset hover:ring-2 hover:ring-yellow-500 cursor-pointer">
                    <Cart size={25} stroke={2} />
                </div>
                <p className="font-medium text-lg md:hidden">{navbar_option.cart}</p>
            </div>
            <div className="p-4 md:p-0 flex flex-row md:flex-col items-center space-x-5">
                <div className="p-3 lg:p-4 w-fit rounded-full md:bg-yellow-500 hover:scale-90 hover:text-yellow-500 hover:bg-transparent hover:ring-inset hover:ring-2 hover:ring-yellow-500 cursor-pointer">
                    <Profile size={25} stroke={2} />
                </div>
                <p className="font-medium text-lg md:hidden">{navbar_option.profile}</p>
            </div>
        </div>
    )
}