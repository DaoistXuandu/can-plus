import { connectToDB } from "@/app/lib/dbConnect";
import Transaction from "@/app/models/Transaction";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { transactionId, status } = await request.json()
        const transaction = await Transaction.findOneAndUpdate(
            { _id: transactionId },
            {
                status: status
            },
            { new: true }
        )

        if (transaction) {
            return NextResponse.json({
                message: "Success updating transaction",
                state: true,
                transaction: transaction
            })
        }
        else {
            throw "Error in creating"
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