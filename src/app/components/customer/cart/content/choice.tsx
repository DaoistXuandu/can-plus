import { useState } from "react";

export default function Choice(
    { name, setStatus, choice, index }: { name: string, index: number, choice: number, setStatus: (status: number) => void }) {

    const handleChange = (value: string) => {
        // console.log(value)
    };
    return (
        <div
            onClick={e => setStatus(index)}
            className="
                bg-yellow-400
                w-full
                flex 
                flex-row 
                items-center 
                rounded-xl
                space-x-4 
                text-md
                md:text-xl
                font-bold
                text-white
                p-4 pl-6 pr-6
                accent-yellow-700
                cursor-pointer">
            <input
                checked={index == choice}
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                id={name} type="radio"
                onChange={e => setStatus(e.target.value == "on" ? index : choice)} />
            <label htmlFor={name} className="">{name}</label>
        </div>
    )
}