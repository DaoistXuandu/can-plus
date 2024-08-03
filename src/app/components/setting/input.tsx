import { updateUser } from "@/app/lib/controller/user"
import Pen from "@/app/lib/icon/pen"
import { stat } from "fs"
import { useEffect, useState } from "react"

export default function Input(
    {
        name,
        required,
        data,
        index
    }: { name: string, required: boolean, data: string, index: number }) {

    const [editable, setEditable] = useState(false)
    const [prev, setPrev] = useState(data)
    const [value, setValue] = useState(data)

    useEffect(() => {
        if (prev != value && editable == false) {
            change()
        }
    }, [editable])

    async function change() {
        const update = await updateUser({
            name: (index == 0 ? value : null),
            telephone: (index == 1 ? value : null),
            email: (index == 2 ? value : null)
        })
    }

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
                    className={` ${required ? "" : "hidden"} flex flex-row space-x-2 cursor-pointer absolute top-0 right-4 h-full text-black flex items-center`}
                    onClick={e => setEditable(editable != true)}
                >
                    <Pen size={30} stroke={2} />
                    <p className={`${editable ? '' : 'hidden'} font-bold text-green-400`}>Selesai</p>
                </div>
            </div>
        </div>
    )
}