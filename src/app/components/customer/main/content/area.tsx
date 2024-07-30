export default function Area({ url, name, address }: { url: string, name: string, address: string }) {
    return (
        <div className="bg-white rounded-2xl w-5/12 h-60 flex grow flex-col">
            <div style={{ backgroundImage: `url(${url})` }} className="rounded-t-2xl w-full h-4/6" ></div>
            <div className="p-3 pl-6 pr-6">
                <h1 className="text-black text-2xl font-bold">
                    {name}
                </h1>
                <p className="text-black text-sm">
                    {address}
                </p>
            </div>
        </div >
    )
}