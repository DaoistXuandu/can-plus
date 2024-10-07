import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectToDB()

        let id = null
        if (process.env.NEXT_PUBLIC_SESSION) {
            id = cookies().get(process.env.NEXT_PUBLIC_SESSION)
        }

        if (id) {
            const customer = await Customer.findOne({ _id: id.value })
            if (customer) {
                return NextResponse.json({
                    message: "Succes to get merchant",
                    state: true,
                    merchant: customer.merchantCart
                }, { status: 200 })
            }
            else throw "Fail to get merchant"
        }
        else {
            throw "Invalid cookies"
        }
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            merchant: null,
            state: false
        }, { status: 400 })
    }
}