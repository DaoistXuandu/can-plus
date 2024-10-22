import { customerGet, customerGetMerchant, customerUpdateMerchant } from "@/app/controller/customer";
import { orderCreate, orderDeleteMenu, orderGetQuantity, orderUpdate } from "@/app/controller/order";
import { confirm_alert, ok_alert } from "@/app/lib/alert";
import Plus from "@/app/lib/icon/add";
import Minus from "@/app/lib/icon/minus";
import { useEffect, useState } from "react";

export default function Menu({
    menuId,
    merchantId,
    name,
    price,
    image,
    quantity }:

    { menuId: string, merchantId: string, name: string, price: string, image: string, quantity: (value: number) => void }
) {
    const [value, setValue] = useState(0);
    const [buffer, setBuffer] = useState(false)

    async function getQuantity() {
        const quantity = await orderGetQuantity(menuId)
        setValue(quantity)
    }

    async function updateQuantity(item: number) {
        if (buffer)
            return null

        const currentMerchant = await customerGetMerchant()
        if (value != 0) {
            setBuffer(true)
            orderUpdate(menuId, item, null)
            setValue(item)
            setBuffer(false)
        }
        else {
            if (currentMerchant == null) {
                await customerUpdateMerchant(merchantId)
            }
            else if (currentMerchant != merchantId) {
                const confirm = await confirm_alert("Merubah Pesanan", "Apakah kamu mau melupakan pesanan pada toko sebelumnya?")
                if (confirm) {
                    await orderDeleteMenu(merchantId)
                    await customerUpdateMerchant(merchantId)
                }
                else return
            }

            setBuffer(true)
            const data = await orderCreate(menuId, item)
            setValue(1)
            setBuffer(false)

        }
    }


    function add() {
        updateQuantity(value + 1)
    }

    function less() {
        if (value > 0)
            updateQuantity(value - 1)
    }

    useEffect(() => {
        getQuantity()
    }, [menuId])

    return (
        <div className="flex flex-row items-center w-full h-full space-x-5">
            <div className="w-10/12 md:w-11/12 flex flex-row h-fit space-x-5 select-none">
                <img src={image} className="object-cover rounded-xl h-16 w-16 min-h-16 min-w-16 md:min-h-16 md:min-w-16 md:h-16 md:w-16" alt="" />
                <div className="flex flex-col justify-center w-full overflow-x-auto">
                    <h1 className="w-full font-medium text-lg md:text-2xl whitespace-nowrap">{name}</h1>
                    <p className="font-light text-sm md:text-lg">Rp {price}</p>
                </div>
            </div>
            <div className="w-2/12 md:w-1/12 flex md:space-x-5 justify-between items-center">
                <div className={`${value > 0 ? "cursor-pointer" : "opacity-0"}  hover:scale-130`} onClick={e => less()}>
                    <Minus size={20} stroke={2} />
                </div>
                <h1 className={`select-none ${value > 0 ? "" : "opacity-0"} text-sm md:text-xl font-bold`}>{value}</h1>
                <div className={`cursor-pointer hover:opacity-90 hover:scale-130 hover:font-bold`} onClick={e => add()}>
                    <Plus size={20} stroke={2} />
                </div>
            </div>
        </div>
    )
}