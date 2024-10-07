import { canteenGetByKeyword } from "@/app/controller/canteen";
import { merchantUpdate } from "@/app/controller/merchant";
import DropDown from "@/app/lib/icon/dropdown";
import mongoose, { mongo } from "mongoose";
import { useEffect, useState } from "react";

export default function DropDownElement({
    name,
    location
}:
    { name: string, location: string }) {
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState(location)
    const [data, setData] = useState<{
        _id: mongoose.Types.ObjectId,
        name: string,
        location: string
    }[]>([])

    useEffect(() => {
        setValue(location)
    }, [location])

    async function getData() {
        const keyword = await canteenGetByKeyword(value)
        setData(keyword)
    }

    async function updateData(e: mongoose.Types.ObjectId, location: string) {
        const update = await merchantUpdate({
            name: null,
            email: null,
            telephone: null,
            image: null,
            canteenId: e
        })
        setValue(location)
        setEditable(false)
    }

    useEffect(() => {
        getData()
    }, [value])

    return (
        <div className="flex flex-col w-full space-y-2">
            <label htmlFor={name} className="text-black font-bold text-xl flex flex-row">
                <p>{name}</p>
                <p className="text-red-600">*</p>
            </label>
            <div className="relative w-full">
                <div>
                    <input
                        type="text"
                        id={name}
                        value={value}
                        className={`
                    p-4 pl-6 ${editable ? 'pr-28' : 'pr-12'}
                    ${!editable ? "opacity-80 text-gray-400" : "ring-inset ring-2 ring-yellow-300"}
                    w-full
                    text-black font-medium
                    placeholder:opacity-50 placeholder:text-black placeholder:text-sm 
                    rounded-xl
                    focus:outline-none`}
                        placeholder={name}
                        readOnly={!editable}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div
                        className={`${editable ? 'rotate-180' : ''} transition-all duration-700 flex flex-row space-x-2 cursor-pointer absolute top-0 right-4 h-full text-black flex items-center`}
                        onClick={e => setEditable(editable != true)}
                    >
                        <DropDown size={30} stroke={2} />
                    </div>
                </div>
                <div className={`${editable ? '' : 'hidden'} ring-inset ring-2 shadow-2xl ring-yellow-300 absolute z-50 overflow-auto w-full max-h-68 rounded-xl mt-5`}>
                    {
                        data.map((item, index) => (
                            <div
                                onClick={e => updateData(item._id, item.name)}
                                className="text-black hover:bg-gray-300 cursor-pointer font-medium w-full h-fit p-5 pl-7 pr-7 bg-white">
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}