import Star from "@/app/lib/icon/star"
import { useRouter } from "next/navigation"

export default function Stall(
    {
        name,
        location,
        description,
        rating,
        image_background,
        image_profile,
    }:
        {
            name: string,
            location: string,
            description: string,
            rating: string,
            image_background: string,
            image_profile: string
        }) {

    const router = useRouter()
    return (
        <div className="w-full md:w-3/12 h-60 bg-white flex flex-col rounded-2xl cursor-pointer" onClick={e => (router.push("/pages/customer/merchant"))} >
            <div style={{ backgroundImage: `url(${image_background})` }}
                className="hidden md:flex relative z-0 w-full h-2/6 rounded-t-2xl">
                <img src={image_profile} className="absolute top-1/2 md:right-1/2 lg:right-2/3 h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="hidden md:flex w-full flex flex-row h-1/6">
                <div className="md:w-1/2 lg:w-1/3"></div>
                <div className="mt-2 ml-6 md:w-1/2 lg:w-2/3 text-yellow-300">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-black text-lg font-bold">{rating}</p>
                            <Star size={20} stroke={2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black h-3/6 p-5 flex flex-col gap-2">
                <div>
                    <img src={image_profile} className="md:hidden w-20 h-20 rounded-full" alt="" />
                    <h1 className="font-bold text-lg mt-2 md:mt-0">{name}</h1>
                    <p className="font-medium text-xs -mt-1">{location}</p>
                </div>
                <div className="relative w-full h-full">
                    <p style={{ textOverflow: "ellipsis" }} className="text-xs overflow-hidden line-clamp-4 md:line-clamp-2">{description}</p>
                    <a className="cursor-pointer absolute text-xs bg-white font-bold text-yellow-400 bottom-0 right-0">..Selanjutnya</a>
                </div>
            </div>
        </div>
    )
}