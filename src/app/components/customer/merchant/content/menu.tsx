import Plus from "@/app/lib/icon/add";
import Minus from "@/app/lib/icon/minus";
import { useState } from "react";

export default function Menu({
    name,
    price,
    image,
    quantity }:

    { name: string, price: string, image: string, quantity: (value: number) => void }
) {
    const [value, setValue] = useState(0);
    return (
        <div className="flex flex-row items-center w-full h-full">
            <div className="w-10/12 md:w-11/12 flex flex-row h-fit space-x-5 select-none overflow-scroll">
                <img src={image} className="rounded-xl h-16 w-16 min-h-16 min-w-16 md:min-h-20 md:min-w-20 md:h-20 md:w-20" alt="" />
                <div className="flex flex-col justify-center w-full">
                    <h1 className="w-full font-medium text-lg md:text-2xl whitespace-nowrap">{name}</h1>
                    <p className="font-light text-sm md:text-lg">Rp {price}</p>
                </div>
            </div>
            <div className="w-2/12 md:w-1/12 flex md:space-x-5 justify-between items-center">
                <div className={`${value > 0 ? "cursor-pointer" : "opacity-0"}  hover:scale-110`} onClick={e => setValue((value == 0 ? 0 : value - 1))}>
                    <Minus size={20} stroke={2} />
                </div>
                <h1 className={`${value > 0 ? "" : "opacity-0"} text-sm md:text-xl font-bold`}>{value}</h1>
                <div className={`cursor-pointer hover:opacity-90 hover:scale-110`} onClick={e => setValue(value + 1)}>
                    <Plus size={20} stroke={2} />
                </div>
            </div>
        </div>
    )
}