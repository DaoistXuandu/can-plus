import { merchantGet } from "@/app/controller/merchant"
import Star from "@/app/lib/icon/star"
import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"

export default function Stall({ id }: { id: String }) {
    const router = useRouter()
    const [isOverflow, setIsOverflow] = useState(false)
    const [data, setData] = useState<{
        canteen: string,
        name: string,
        image: string,
        description: string,
        rating: string,
        time_open: Date,
        time_close: Date,
        email: string,
        telephone: string
    }>({
        canteen: "",
        name: "",
        image: "",
        description: "",
        rating: "",
        time_open: new Date(),
        time_close: new Date(),
        email: "",
        telephone: ""
    })

    async function getData() {
        if (id == undefined)
            return
        const result = await merchantGet(id.toString())
        setData(result)
    }

    useEffect(() => {
        // console.log(id)
        getData()
    }, [id])

    const description = useRef<HTMLParagraphElement>(null)

    const checkOverflow = () => {
        const el = description.current;
        if (el) {
            // Check if the content overflows the element's height or width
            const isOverflow =
                el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
            setIsOverflow(isOverflow);
        }
    };

    // useEffect(() => {
    //     console.log(isOverflow)
    // }, [isOverflow])

    useEffect(() => {
        // console.log("TEST", data)
    }, [data])

    return (
        <div style={{ cursor: "pointer" }} className="cursor-pointer hover:shadow-md hover:scale-95 w-full md:w-3/12 h-60 bg-white flex grow flex-col rounded-2xl" onClick={e => (router.push(`/pages/customer/merchant/${id}`))} >
            <div style={{ backgroundImage: `url(${data.image})` }} className="hidden md:flex relative z-0 w-full h-2/6 rounded-t-2xl">
                <img src={data ? data.image.toString() : ""} className="absolute top-1/2 md:right-1/2 lg:right-2/3 h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="hidden md:flex w-full flex flex-row h-1/6">
                <div className="md:w-1/2 lg:w-1/3"></div>
                <div className="mt-2 ml-6 md:w-1/2 lg:w-2/3 text-yellow-300">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center space-x-2">
                            {
                                data != null ?
                                    <p className="text-black text-lg font-bold">{data.rating.toString()}</p>
                                    : "Loading..."
                            }
                            <Star size={20} stroke={2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black h-3/6 p-5 flex flex-col gap-2">
                <div>
                    <img src={data.image.toString()} className="md:hidden w-20 h-20 rounded-full" alt="" />
                    {data ?
                        <h1 className="font-bold text-lg mt-2 md:mt-0">{data.name.toString()}</h1>
                        :
                        "Loading..."
                    }
                    <p className="font-medium text-xs -mt-1">
                        {
                            data ?
                                data.canteen.toString()
                                :
                                "Loading..."
                        }
                    </p>
                </div>
                <div className="relative w-full h-full">
                    {
                        data ?
                            <p style={{ textOverflow: "ellipsis" }} ref={description} className={`text-xs overflow-hidden line-clamp-4 md:line-clamp-2`}>{data.description}</p>
                            :
                            "Loading..."
                    }
                    <a style={{ display: (isOverflow ? "" : "none") }} className={`cursor-pointer absolute text-xs bg-white font-bold text-yellow-400 bottom-0 right-0`}>..Selanjutnya</a>
                </div>
            </div>
        </div>
    )
}