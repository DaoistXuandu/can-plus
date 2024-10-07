import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    try {
        await connectToDB()
        let customerId = null
        let env = process.env.NEXT_PUBLIC_SESSION
        if (env)
            customerId = cookies().get(env)?.value

        const order = await Order.deleteMany({
            customerId: customerId
        })

        if (order) {
            return NextResponse.json({
                message: "Succes to delete merchant",
                state: true,
                order: order
            }, { status: 200 })
        }
        else throw "Fail to delete merchant"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            state: false
        }, { status: 400 })
    }
}