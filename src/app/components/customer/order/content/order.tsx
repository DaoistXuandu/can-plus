import { useRef, useState } from "react";
import Status from "./status";
import { order, status, status_comment } from "@/app/lib/content/customer/order";
import Check from "@/app/lib/icon/check";

export default function Order({ orderIndex }:
    { orderIndex: number }
) {
    const currrentOrder = order[orderIndex]
    const [currentStatus, setCurrentStatus] = useState(currrentOrder.status);

    return (
        <div className="flex flex-row items-center w-full h-full space-x-5">
            <div className="w-full flex flex-col md:flex-row h-fit md:space-x-7 select-none overflow-auto items-center">
                <div className="flex flex-col justify-center w-full">
                    <h1 className="font-bold text-3xl">{currrentOrder.name}</h1>
                    <div className="space-y-1 mt-1">
                        <div className="flex flex-row items-center">
                            <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[0]}</p>
                            <p>:</p>
                            <p className="ml-4 font-medium text-md md:text-lg">Rp {currrentOrder.total}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[5]}</p>
                            <p>:</p>
                            <p className="ml-4 font-medium text-md md:text-lg">Rp {currrentOrder.delivery}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[6]}</p>
                            <p>:</p>
                            <p className="ml-4 font-medium text-md md:text-lg">Rp {currrentOrder.app}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[1]}</p>
                            <p>:</p>
                            <p className="ml-4 font-medium text-md md:text-lg">{currrentOrder.time}</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">{status_comment.section[2]}</p>
                            <p>:</p>
                            <div className="w-8/12 md:w-10/12 flex flex-col">
                                <p style={{ color: status[currentStatus].color }} className="ml-4 font-medium text-md md:text-lg">
                                    {status[currentStatus].comment}
                                </p>
                                <div className={`${currentStatus == 3 ? '' : 'hidden'}`}>
                                    <button
                                        onClick={e => setCurrentStatus(currentStatus + 1)}
                                        className="hover:font-bold ml-4 text-sm flex flex-row items-center space-x-3">
                                        <p>
                                            {status_comment.main}
                                        </p>
                                        <div className="text-green-600">
                                            <Check size={15} stroke={4} />
                                        </div>
                                    </button>
                                    <div className="flex flex-row ml-4 text-xs">
                                        <p className="text-red-400">*</p>
                                        <p>{status_comment.secondary}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-2/12 font-medium text-lg md:text-xl">{status_comment.section[3]}</p>
                            <p>:</p>
                        </div>
                        <div>
                            <div className="flex flex-col space-y-8 mt-1">
                                {
                                    currrentOrder.order.map((item, index) => (
                                        <div className="flex flex-row items-start space-x-3">
                                            <div className="w-fit font-bold text-lg">
                                                {index + 1}.
                                            </div>
                                            <div className="w-full h-full flex flex-col space-y-2">
                                                <div className="flex flex-row justify-between">
                                                    <div>
                                                        <p className="font-bold text-lg">{item.name}</p>
                                                        <p className="font-medium text-md">Rp {item.price},00</p>
                                                    </div>
                                                    <div>
                                                        <p>X {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{status_comment.section[4]}:</p>
                                                    <p>{item.note}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}