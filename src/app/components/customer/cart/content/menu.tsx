import { main } from "@/app/lib/content/customer/cart";
import Plus from "@/app/lib/icon/add";
import Minus from "@/app/lib/icon/minus";
import Note from "@/app/lib/icon/note";
import { useEffect, useRef, useState } from "react";

export default function Menu({
    name,
    price,
    image,
    quantity }:

    { name: string, price: string, image: string, quantity: number }
) {
    const [value, setValue] = useState(quantity)
    const [note, setNote] = useState("")
    const [edit, setEdit] = useState(false)

    const input = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const object = input.current as HTMLTextAreaElement
        object.style.height = "auto"
        object.style.height = object.scrollHeight + "px"
        if (note == "")
            object.style.height = "50px"

        console.log(object.scrollHeight, object.offsetHeight, object.clientHeight)
    }, [note])

    return (
        <div className="flex flex-row items-center w-full h-full space-x-5">
            <div className="w-10/12 md:w-11/12 flex flex-col md:flex-row h-fit md:space-x-5 select-none overflow-scroll items-center">
                <div className="flex flex-row justify-start items-center w-full md:w-1/12">
                    <div className="w-1/4 md:w-full">
                        <img src={image} className="rounded-xl w-full aspect-square" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-11/12">
                    <h1 className="w-full font-medium text-lg md:text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{name}</h1>
                    <p className="font-light text-sm md:text-lg">Rp {price}</p>
                    <div
                        className="cursor-pointer mt-2 flex flex-row items-center space-x-3"
                        onClick={e => setEdit(edit != true)}>
                        <Note size={25} stroke={1} />
                        <p className="text-md">{main.note}</p>
                        <div className={`flex flex-row items-center space-x-3 transition-all duration-300 ${edit ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                            <p className="font-bold text-red-600">{main.note_edit}</p>
                        </div>
                    </div>
                    <textarea
                        ref={input}
                        style={{ backgroundColor: (edit ? "white" : "#ECF0F1") }}
                        name='note'
                        value={note}
                        readOnly={edit != true}
                        // onClick={e => setEdit(edit != true)}
                        onChange={e => setNote(e.target.value)}
                        className={`${(note == "" && edit == false) ? "hidden" : ""} w-full h-40 rounded-xl text-md focus:outline-none mt-2 ${edit ? 'p-3 pl-5 pr-5' : ''} resize-none ${!edit ? 'cursor-pointer' : ''}`}></textarea>

                </div>
            </div>
            <div className="w-2/12 md:w-1/12 flex md:space-x-5 justify-between items-center">
                <div className={` hover:scale-110`} onClick={e => setValue((value == 0 ? 0 : value - 1))}>
                    <Minus size={20} stroke={2} />
                </div>
                <h1 className={` text-sm md:text-xl font-bold`}>{value}</h1>
                <div className={`cursor-pointer hover:opacity-90 hover:scale-110`} onClick={e => setValue(value + 1)}>
                    <Plus size={20} stroke={2} />
                </div>
            </div>
        </div >
    )
}