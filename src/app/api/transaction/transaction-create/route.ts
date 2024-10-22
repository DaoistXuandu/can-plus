import { connectToDB } from "@/app/lib/dbConnect";
import Transaction from "@/app/models/Transaction";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { total, status, time } = await request.json()
        let env = process.env.NEXT_PUBLIC_SESSION
        let customerId = null

        if (env)
            customerId = cookies().get(env)?.value

        if (customerId) {
            console.log(1)
            const transaction = await Transaction.create({
                customerId: customerId,
                total: total,
                status: status,
                time: time
            })

            if (transaction) {
                return NextResponse.json({
                    message: "Success creating new transaction",
                    state: true,
                    transaction: transaction
                })
            }
            else {
                throw "Error in creating"
            }
        }
        else {
            throw "Invalid Customer Id"
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