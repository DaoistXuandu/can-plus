import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { orderId, comment } = await request.json()

        let env = process.env.NEXT_PUBLIC_SESSION
        let customerId = null
        if (env)
            customerId = cookies().get(env)?.value

        let order = null
        order = await Order.findOneAndUpdate(
            { _id: orderId },
            { comment: comment },
            { new: true }
        )

        if (order) {
            return NextResponse.json({
                message: "Succes to update order",
                state: true,
                order: order,
                comment: order.comment
            }, { status: 200 })
        }
        else throw "Fail to update order"

    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            state: false,
            comment: ""
        }, { status: 400 })
    }
}