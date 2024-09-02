import { stall } from "@/app/lib/content/customer/restaurant";
import Menu from "./menu";
import { noto_sans } from "@/app/lib/font";
import Pen from "@/app/lib/icon/pen";
import { useState } from "react";
import Plus from "@/app/lib/icon/add";
import Input from "./input";
import InputImage from "./inputImage";
import Minus from "@/app/lib/icon/minus";

export default function Section({ index }: { index: number }) {
    const [sectionName, setSectionName] = useState(stall[0].menu[index].section)
    const [edit, setEdit] = useState(false)
    const [menu, setMenu] = useState(false)

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-4">
                <div>
                    <h1 className={`${edit ? 'hidden' : ''} select-none font-bold text-2xl ${noto_sans.className}`}>{stall[0].menu[index].section}</h1>
                    <input
                        type="text"
                        className={`font-medium text-lg md:text-2xl whitespace-nowrap ring-2 ring-inset ring-yellow-300 rounded-sm ${edit ? '' : 'hidden'}`}
                        value={sectionName}
                        onChange={e => setSectionName(e.target.value)}
                    />
                </div>
                <div onClick={e => setEdit(edit != true)} className="cursor-pointer flex flex-row space-x-2">
                    <Pen size={25} stroke={2} />
                    <Minus size={25} stroke={2} />
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                {
                    stall[0].menu[index].list.map(item => (
                        <Menu name={item.name} price={item.price} image={item.image} quantity={() => { }} />
                    ))
                }
            </div>
            <button className={`flex flex-row items-center space-x-5`} onClick={e => setMenu(menu != true)}>
                <div className={`h-fit w-fit rounded-full bg-white p-2 shadow-md hover:scale-95 ${menu ? 'rotate-45' : 'rotate-90'} transition-all ease-in-out duration-700`}>
                    <Plus size={25} stroke={3} />
                </div>
                <h1>Tambah Menu</h1>
            </button>
            <form className={`${menu ? 'pt-10 pb-10 pl-7 pr-7' : 'h-0 w-0'} transition-all ease-in-out duration-700 overflow-hidden bg-yellow-400 w-full lg:w-1/2 rounded-xl flex flex-col space-y-6`}>
                <h1 className="font-bold text-4xl text-white">Menu Baru</h1>
                <div className={`flex flex-col space-y-12 transition-all duration-700 ${menu ? 'w-full' : 'w-0'}`}>
                    <div className="flex flex-col space-y-4">
                        <Input name="Nama Makanan" />
                        <Input name="Harga Makanan" />
                        <InputImage />
                    </div>
                    <button className="p-3 bg-yellow-700 rounded-xl text-white font-bold text-lg hover:scale-95">
                        <h1>
                            Tambahkan Menu baru
                        </h1>
                    </button>
                </div>
            </form>
        </div >
    )
}