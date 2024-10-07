import { menu } from "@/app/lib/content/customer/restaurant";
import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { menuId, quantity } = await request.json()

        let customerId = null
        let env = process.env.NEXT_PUBLIC_SESSION
        if (env)
            customerId = cookies().get(env)?.value


        const order = await Order.create({
            customerId: customerId,
            menuId: menuId,
            quantity: quantity
        })

        if (order) {
            return NextResponse.json({
                message: "Succes to create order",
                state: true,
                order: order
            }, { status: 200 })
        }
        else throw "Fail to create order"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            state: false
        }, { status: 400 })
    }
}