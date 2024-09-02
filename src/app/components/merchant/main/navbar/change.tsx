import { useState } from "react"

export default function Change({ name, currentEdit, change, dataIndex }:
    { name: string, currentEdit: number, dataIndex: number, change: (data: number) => void }) {

    function inputStyle() {
        if (dataIndex == 2) {
            return (
                <div className="flex flex-row w-full space-x-2">
                    <div className="w-1/2">
                        <h1>Waktu Buka</h1>
                        <input
                            className="w-full rounded-md p-3 text-black"
                            placeholder={`${name.split(" ")[1]} Baru`}
                            type="time"
                        />
                    </div>
                    <div className="w-1/2">
                        <h1>Waktu Tutup</h1>
                        <input
                            className="w-full rounded-md p-3 text-black"
                            placeholder={`${name.split(" ")[1]} Baru`}
                            type="time"
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <input
                        className="w-full rounded-md p-3 text-black"
                        placeholder={`${name.split(" ")[1]} Baru`}
                        type="text"
                    />
                </div>
            )
        }
    }

    return (
        <form style={{ backgroundColor: "#F1C40F" }} className="shadow-lg w-full md:w-96 absolute left-0 md:left-auto mt-3 rounded-xl p-5 flex flex-col space-y-6 justify-start">
            <div className="flex flex-col space-y-3">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div>
                    {
                        inputStyle()
                    }
                </div>
            </div>
            <button
                onClick={e => {
                    (dataIndex == currentEdit ? change(-1) : change(dataIndex))
                }}
                className={`hover:scale-105 text-white text-left p-2 pl-6 pr-6 font-bold rounded-full bg-yellow-${dataIndex != currentEdit ? '400' : '600'} w-fit`}>Ubah</button>
        </form >
    )
}