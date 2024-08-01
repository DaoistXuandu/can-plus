import { stall } from "@/app/lib/content/customer/restaurant";
import Menu from "./menu";
import { bill, delivery, main } from "@/app/lib/content/customer/cart";
import Choice from "./choice";
import { useState } from "react";

export default function Content() {
    const menu = stall[0].menu[0].list[0]
    const [choice, setchoice] = useState(0)
    return (
        <div>
            <div className="h-80 md:h-52"></div>
            <div>
                <div className="text-black pl-5 pr-5 mt-8 md:mt-10 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-4 pb-16">
                    <h1 className="font-bold text-3xl md:text-4xl">{main.section}</h1>
                    <div className="flex flex-col space-y-8">
                        <Menu name={menu.name} price={menu.price} image={menu.image} quantity={1} />
                        <Menu name={"Mie Goreng"} price={menu.price} image={menu.image} quantity={4} />
                        <Menu name={"Bakso"} price={menu.price} image={menu.image} quantity={3} />
                        <Menu name={"Daging"} price={menu.price} image={menu.image} quantity={2} />
                        <Menu name={"Pop Ice"} price={menu.price} image={menu.image} quantity={1} />
                        <Menu name={"Es Degan"} price={menu.price} image={menu.image} quantity={2} />
                    </div>
                </div>
                <div className="text-black pl-5 pr-5 mt-5 md:mt-5 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-5 pb-10">
                    <h1 className="font-bold text-3xl md:text-4xl">{delivery.title}</h1>
                    <div className="flex flex-row space-x-8">
                        <Choice name={delivery.type[0]} index={0} choice={choice} setStatus={setchoice} />
                        <Choice name={delivery.type[1]} index={1} choice={choice} setStatus={setchoice} />
                    </div>
                </div>
                <div className="text-black pl-5 pr-5 mt-10 md:mt-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-10 pb-10">
                    <div className="flex flex-col space-y-2">
                        <h1 className="font-bold text-3xl md:text-4xl">{bill.title}</h1>
                        <h1 className="font-bold text-4xl md:text-6xl">Rp {bill.price},00</h1>
                        <div className="flex flex-row space-x-2">
                            <div className="w-fit">
                                <div className="flex flex-row w-full justify-between">
                                    <p className="pr-2">{bill.detail.food.comment}</p>
                                    <p>:</p>
                                </div>
                                <div className="flex flex-row w-full justify-between">
                                    <p>{bill.detail.delivery.comment}</p>
                                    <p>:</p>
                                </div>
                                <div className="flex flex-row w-full justify-between">
                                    <p>{bill.detail.apps.comment}</p>
                                    <p>:</p>
                                </div>
                            </div>
                            <div>
                                <p>Rp {bill.detail.food.price},00</p>
                                <p>Rp {bill.detail.delivery.price},00</p>
                                <p>Rp {bill.detail.apps.price},00</p>
                            </div>
                        </div>
                    </div>
                    <button
                        style={{ backgroundColor: "#3498DB" }}
                        className="hover:scale-95 flex p-2 text-2xl space-x-3 flex-row rounded-full justify-center items-center text-white font-bold">
                        <img src={bill.url} alt="" />
                        <p>{bill.button_comment}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}