import { menuGetAll } from "@/app/controller/menu";
import Menu from "./menu";
import { noto_sans } from "@/app/lib/font";
import { useEffect, useState } from "react";
import mongoose from "mongoose";

interface menuInterface {
    _id: mongoose.Types.ObjectId,
    sectionId: string,
    name: string,
    price: string,
    image: string
}

export default function Section({ name, sectionId, merchantId }: { name: string, sectionId: string, merchantId: string }) {
    const [menu, setMenu] = useState<menuInterface[]>()
    async function getMenu() {
        const result = await menuGetAll(sectionId)
        setMenu(result)
    }

    useEffect(() => {
        getMenu()
    }, [sectionId])

    return (
        <div className="flex flex-col space-y-4">
            <h1 className={`select-none font-bold text-2xl ${noto_sans.className}`}>{name}</h1>
            <div className="flex flex-col space-y-3">
                {
                    menu ?
                        menu.map(item => (
                            <Menu merchantId={merchantId} menuId={item._id.toString()} name={item.name} price={item.price} image={item.image} quantity={() => { }} />
                        ))
                        :
                        "Loading..."
                }
            </div>
        </div>
    )
}