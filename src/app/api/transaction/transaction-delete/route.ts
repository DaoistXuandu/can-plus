import { connectToDB } from "@/app/lib/dbConnect";
import Transaction from "@/app/models/Transaction";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    try {
        await connectToDB()
        const { transactionId } = await request.json()
        const transaction = await Transaction.findOneAndDelete({ _id: transactionId })
        if (transaction) {
            return NextResponse.json({
                message: "Success deleting transaction",
                state: true,
                transaction: transaction
            })
        }
        else {
            throw "Error in deleting"
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