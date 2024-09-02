import { useRef, useState } from "react";
import Status from "./status";
import { order, status, status_comment } from "@/app/lib/content/customer/order";
import Check from "@/app/lib/icon/check";
import Plus from "@/app/lib/icon/add";

export default function Order({ orderIndex }:
    { orderIndex: number }
) {
    const currentOrder = order[0]

    function orderResponse() {
        if (orderIndex == 0) {
            return (
                <div className="w-full flex flex-row mt-10 space-x-5">
                    <div className="w-1/2 font-medium justify-center p-3 border-2 border-green-500 text-green-500 cursor-pointer flex flex-row space-x-2 hover:bg-green-500 hover:text-white">
                        <Check size={25} stroke={3} />
                        <h1>
                            Terima Pesanan
                        </h1>
                    </div>
                    <div className="w-1/2 font-medium justify-center p-3 border-2 border-red-500 text-red-500 cursor-pointer flex flex-row space-x-2 hover:bg-red-500 hover:text-white">
                        <div className="rotate-45">
                            <Plus size={25} stroke={3} />
                        </div>
                        <h1>
                            Batalkan Pesanan
                        </h1>
                    </div>
                </div>
            )
        }
        else if (orderIndex == 1) {
            return (
                <div className="w-full font-medium justify-center p-3 border-2 border-green-500 text-green-500 cursor-pointer flex flex-row space-x-2 hover:bg-green-500 hover:text-white mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <h1>
                        Pesanan Telah Selesai
                    </h1>
                </div >
            )
        }
    }

    return (
        <div className="flex flex-row items-center w-full h-full space-x-5">
            <div className="w-full flex flex-col md:flex-row h-fit md:space-x-7 select-none overflow-auto items-center">
                <div className="flex flex-col justify-center w-full">
                    <h1 className="font-bold text-3xl">Hendy</h1>
                    <div className="space-y-1 mt-1">
                        <div className="flex flex-row items-center">
                            <p className="w-4/12 md:w-2/12 font-medium text-lg md:text-xl">Total</p>
                            <p>:</p>
                            <p className="ml-4 font-medium text-md md:text-lg">Rp {currentOrder.total}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-2/12 font-medium text-lg md:text-xl">{status_comment.section[3]}</p>
                            <p>:</p>
                        </div>
                        <div>
                            <div className="flex flex-col space-y-8 mt-1">
                                {
                                    currentOrder.order.map((item, index) => (
                                        <div className="flex flex-row items-start space-x-3">
                                            <div className="w-fit font-bold text-lg">
                                                {index + 1}.
                                            </div>
                                            <div className="w-full h-full flex flex-col space-y-2">
                                                <div className="flex flex-col">
                                                    <div>
                                                        <p className="font-bold text-lg">{item.name}</p>
                                                        {/* <p className="font-medium text-md">Rp {item.price},00</p> */}
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
                    {
                        orderResponse()
                    }
                </div>
            </div>
        </div >
    )
}