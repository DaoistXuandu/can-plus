import { canteenGetByKeyword } from "@/app/controller/canteen"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Area({ id }: { id: string }) {
    const router = useRouter()
    const [data, setData] = useState<{ image: String, name: String, location: String }>({ image: "", name: "", location: "" })

    async function getData() {
        const result = await canteenGetByKeyword(id)
        setData(result)
    }

    useEffect(() => {
        getData()
    }, [id])


    return (
        <div className="hover:scale-95 hover:shadow-xl bg-white rounded-2xl w-full md:w-5/12 h-60 flex grow flex-col cursor-pointer" onClick={e => router.push(`/pages/customer/search-by-canteen/${data.name}`)}>
            <div style={{ backgroundImage: `url(${data.image ? data.image : ""})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="rounded-t-2xl w-full h-4/6" ></div>
            <div className="p-3 pl-6 pr-6">
                <h1 className="text-black text-2xl font-bold">
                    {data.name.toString()}
                </h1>
                <p className="mt-1 md:mt-0 text-black text-sm">
                    {data.location.toString()}
                </p>
            </div>
        </div >
    )
}