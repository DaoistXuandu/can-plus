import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import Order from "@/app/models/customer/Order";
import mongoose, { mongo } from "mongoose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { transactionId } = await request.json()
        let customerId = null
        let env = process.env.NEXT_PUBLIC_SESSION
        if (env)
            customerId = cookies().get(env)?.value

        if (customerId) {
            const user = await Customer.findOne({ _id: customerId })
            const order = await Order.updateMany(
                { customerId: customerId },
                { $set: { customerId: transactionId } },
            )

            if (order) {
                return NextResponse.json({
                    message: "Succes to update customer",
                    state: true,
                    order: order
                }, { status: 200 })
            }
            else throw "Fail to update customer"
        }
        else
            throw "Invalid customer id"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            state: false
        }, { status: 400 })
    }
}