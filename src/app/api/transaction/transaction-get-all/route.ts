import { connectToDB } from "@/app/lib/dbConnect";
import Transaction from "@/app/models/Transaction";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectToDB()
        const env = process.env.NEXT_PUBLIC_SESSION
        let customer = null
        if (env) {
            customer = cookies().get(env)?.value
            if (customer) {
                const transaction = await Transaction.find(
                    { customerId: customer }
                )
                if (transaction) {
                    return NextResponse.json({
                        message: "Success fetcing all data",
                        state: true,
                        transaction: transaction
                    })
                }
                else throw "Error in fecthing"
            }
            else {
                throw "Invalid customer"
            }
        }
        else {
            throw "Invalid env"
        }

    }
    catch (err) {
        return NextResponse.json({
            message: err,
            state: false,
            transaction: null
        }, { status: 400 })
    }
}