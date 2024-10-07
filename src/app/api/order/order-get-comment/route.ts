import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { menuId } = await request.json()

        let customerId = null
        let env = process.env.NEXT_PUBLIC_SESSION
        if (env)
            customerId = cookies().get(env)?.value

        const order = await Order.findOne({
            customerId: customerId,
            menuId: menuId
        })

        if (order) {
            return NextResponse.json({
                message: "Succes to get data",
                state: true,
                comment: order.comment
            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                message: "Succes to get data",
                state: true,
                comment: ""
            }, { status: 200 })
        }
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            comment: "",
            state: false
        }, { status: 400 })
    }
}