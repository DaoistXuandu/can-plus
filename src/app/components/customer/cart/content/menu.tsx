import { menuGet } from "@/app/controller/menu";
import { orderCreate, orderGetComment, orderGetQuantity, orderUpdate, orderUpdateComment, orderUpdateQuantity } from "@/app/controller/order";
import { main } from "@/app/lib/content/customer/cart";
import Plus from "@/app/lib/icon/add";
import Minus from "@/app/lib/icon/minus";
import Note from "@/app/lib/icon/note";
import { useEffect, useRef, useState } from "react";

export default function Menu({
    id, orderId
}:
    { id: string, orderId: string }
) {
    const [menu, setMenu] = useState<{ name: string, price: string, image: string }>({ name: "", price: "", image: "" })
    const [value, setValue] = useState(-1)

    const [note, setNote] = useState("")
    const [edit, setEdit] = useState(false)

    const input = useRef<HTMLTextAreaElement>(null)

    async function updateValue(currentValue: number) {
        if (value != 0) {
            await orderUpdateQuantity(orderId, currentValue)
            setValue(currentValue)
        }
        else {
            const data = await orderCreate(id, 1)
            setValue(1)
        }
    }

    async function updateComment(comment: string) {
        orderUpdateComment(orderId, comment)
    }

    async function getData() {
        const menuData = await menuGet(id)
        const quantity = await orderGetQuantity(id)
        const comment = await orderGetComment(id)
        setMenu(menuData)
        setNote(comment)
        setValue(quantity)
    }

    useEffect(() => {
        getData()
    }, [id])

    useEffect(() => {
        if (note != "")
            updateComment(note)
        const object = input.current as HTMLTextAreaElement
        object.style.height = "auto"
        object.style.height = object.scrollHeight + "px"
        if (note == "")
            object.style.height = "50px"

    }, [note])

    return (
        <div className="flex flex-row items-center w-full h-full space-x-5">
            <div className="w-9/12 md:w-11/12 flex flex-col md:flex-row h-fit md:space-x-5 select-none overflow-auto items-center">
                <div className="flex flex-row justify-start items-center w-full md:w-1/12">
                    <div className="w-1/4 md:w-full">
                        <img src={menu.image} className="rounded-xl w-full aspect-square" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-11/12">
                    <h1 className="w-full font-medium text-lg md:text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{menu.name}</h1>
                    <p className="font-light text-sm md:text-lg">Rp {Number(menu.price).toLocaleString('de-DE')},00</p>
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
                        onChange={e => setNote(e.target.value)}
                        className={`${((note == "" || note == null || note == undefined) && edit == false) ? "hidden" : ""} w-full h-40 rounded-xl text-md focus:outline-none mt-2 ${edit ? 'p-3 pl-5 pr-5' : ''} resize-none ${!edit ? 'cursor-pointer' : ''}`}></textarea>
                </div>
            </div>
            {
                value == -1 ? "" :
                    <div className="w-2/12 md:w-1/12 flex md:space-x-5 items-center md:jutify-end justify-between">
                        <div className={`cursor-pointer hover:scale-110 ${value == 0 ? 'hidden' : ''}`} onClick={e => updateValue((value == 0 ? 0 : value - 1))}>
                            <Minus size={20} stroke={2} />
                        </div>
                        <h1 className={` text-sm md:text-xl font-bold`}>{value}</h1>
                        <div className={`cursor-pointer hover:opacity-90 hover:scale-110 stroke-1`} onClick={e => updateValue(value + 1)}>
                            <Plus size={20} stroke={2} />
                        </div>
                    </div>
            }
        </div >
    )
}