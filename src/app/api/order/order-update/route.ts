import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { quantity, comment, menuId } = await request.json()

        let env = process.env.NEXT_PUBLIC_SESSION
        let customerId = null
        if (env)
            customerId = cookies().get(env)?.value

        let order = null
        if (quantity == 0) {
            order = await Order.findOneAndDelete({ customerId: customerId, menuId: menuId })
            if (order) {
                return NextResponse.json({
                    message: "Succes to delete order",
                    state: true,
                    order: order,
                    quantity: 0
                }, { status: 200 })
            }
            else throw "Fail to update order"
        }
        else {
            order = await Order.findOneAndUpdate(
                { customerId: customerId, menuId: menuId },
                {
                    quantity: quantity,
                    comment: comment
                },
                { new: true }
            )

            if (order) {
                return NextResponse.json({
                    message: "Succes to update order",
                    state: true,
                    order: order,
                    quantity: order.quantity
                }, { status: 200 })
            }
            else throw "Fail to update order"
        }

    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            state: false,
            quantity: 0
        }, { status: 400 })
    }
}