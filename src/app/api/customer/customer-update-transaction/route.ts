import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()

        const { transactionId } = await request.json()

        let id = null
        if (process.env.NEXT_PUBLIC_SESSION) {
            id = cookies().get(process.env.NEXT_PUBLIC_SESSION)
            console.log(cookies())
        }

        console.log("")
        console.log(id, process.env.NEXT_PUBLIC_SESSION)
        console.log("")
        if (id) {
            const customer = await Customer.findOneAndUpdate(
                { _id: id.value },
                { transaction: transactionId },
                { new: true }
            )
            if (customer) {
                return NextResponse.json({
                    message: "Succes to update customer",
                    state: true,
                    customer: customer
                }, { status: 200 })
            }
            else throw "Fail to update merchant"
        }
        else {
            throw "Invalid cookies"
        }
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            customer: null,
            state: false
        }, { status: 400 })
    }
}