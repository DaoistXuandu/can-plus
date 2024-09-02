import { status, status_comment } from "@/app/lib/content/customer/order";
import Check from "@/app/lib/icon/check";
import { useState } from "react";

export default function Status({ index }: { index: number }) {
    const [statusIndex, setStatusIndex] = useState(index)

    return (
        <div className="w-fit flex flex-col space-y-4">
            <h1 style={{ color: status[index].color }} className="font-medium">{status[index].comment}</h1>
            <button className={`${statusIndex == 3 ? '' : 'hidden'} flex flex-col space-y-1`} onClick={e => setStatusIndex(statusIndex + 1)}>
                <div
                    className="hover:bg-green-700 lg:w-3/4 text-green-700 hover:text-white border-green-700 w-full h-fit flex flex-row rounded-md lg:rounded-full border border-2 items-center lg:pl-5 lg:pr-5 p-3 justify-between">
                    <h1 className="font-bold text-xs text-left ">{status_comment.main}</h1>
                    <Check size={15} stroke={5} />
                </div>
                <div className="font-regular text-xs flex text-left flex-row">
                    <p className="text-red-500">*</p>
                    <p> {status_comment.secondary}</p>
                </div>
            </button>
        </div >
    )
}