import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { transactionId } = await request.json()

        const order = await Order.find({
            customerId: transactionId
        })

        if (order) {
            return NextResponse.json({
                message: "Succes to create merchant",
                state: true,
                order: order
            }, { status: 200 })
        }
        else throw "Fail to create merchant"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            state: false
        }, { status: 400 })
    }
}