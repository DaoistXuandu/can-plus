import Pen from "@/app/lib/icon/pen"
import { useState } from "react"

export default function Input(
    {
        name,
        required,
        data,
    }: { name: string, required: boolean, data: string }) {
    const [editable, setEditable] = useState(true)
    const [value, setValue] = useState(data)

    return (
        <div className="flex flex-col w-full space-y-2">
            <label htmlFor={name} className="text-black font-bold text-xl flex flex-row">
                <p>{name}</p>
                <p className="text-red-600">{required ? "*" : ""}</p>
            </label>
            <div className="relative w-full">
                <input
                    type="text"
                    id={name}
                    value={value}
                    className={`
                    p-4 pl-6 pr-12
                    ${editable ? "opacity-80 text-gray-400" : "ring-inset ring-2 ring-yellow-300"}
                    w-full
                    text-black font-medium
                    placeholder:opacity-50 placeholder:text-black placeholder:text-sm 
                    rounded-xl
                    focus:outline-none focus:ring-inset focus:ring-2 focus:ring-yellow-300`}
                    placeholder={name}
                    readOnly={editable}
                    onChange={e => setValue(e.target.value)}
                />

                <div
                    className={` ${required ? "" : "hidden"} cursor-pointer absolute top-0 right-4 h-full text-black flex items-center`}
                    onClick={e => setEditable(editable != true)}
                >
                    <Pen size={30} stroke={2} />
                </div>
            </div>
        </div>
    )
}