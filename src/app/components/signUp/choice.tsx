import { useState } from "react";

export default function Choice(
    { name, setStatus, choice, index }: { name: string, index: number, choice: number, setStatus: (status: number) => void }) {

    const handleChange = (value: string) => {
        // console.log(value)
    };
    return (
        <div style={{ backgroundColor: "#9A7D0A", }}
            className="
                w-full
                flex 
                flex-row 
                items-center 
                rounded-lg
                space-x-4 
                text-md
                p-3 pl-5 pr-5 ">
            <input
                checked={index == choice}
                style={{ width: "20px", height: "20px", cursor: "pointer", accentColor: "#7D6608" }}
                id={name} type="radio"
                onChange={e => setStatus(e.target.value == "on" ? index : choice)} />
            <label htmlFor={name} className="">{name}</label>
        </div>
    )
}