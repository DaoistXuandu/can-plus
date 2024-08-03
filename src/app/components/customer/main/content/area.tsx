import { useRouter } from "next/navigation"

export default function Area({ url, name, address }: { url: string, name: string, address: string }) {
    const router = useRouter()
    return (
        <div className="hover:scale-95 hover:shadow-xl bg-white rounded-2xl w-full md:w-5/12 h-60 flex grow flex-col cursor-pointer" onClick={e => router.push("/pages/customer/search-by-canteen")}>
            <div style={{ backgroundImage: `url(${url})` }} className="rounded-t-2xl w-full h-4/6" ></div>
            <div className="p-3 pl-6 pr-6">
                <h1 className="text-black text-2xl font-bold">
                    {name}
                </h1>
                <p className="mt-1 md:mt-0 text-black text-sm">
                    {address}
                </p>
            </div>
        </div >
    )
}