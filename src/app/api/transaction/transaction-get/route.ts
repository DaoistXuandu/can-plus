import { connectToDB } from "@/app/lib/dbConnect";
import Transaction from "@/app/models/Transaction";
import mongoose, { mongo } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { transactionId } = await request.json()
        const transaction = await Transaction.findOne({ _id: transactionId })
        if (transaction) {
            return NextResponse.json({
                message: "Success getting transaction",
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