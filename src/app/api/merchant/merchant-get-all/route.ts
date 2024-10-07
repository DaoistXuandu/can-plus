import { connectToDB } from "@/app/lib/dbConnect";
import { sessionGet } from "@/app/lib/session";
import Merchant from "@/app/models/merchant/Merchant";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { name } = await request.json()
        const merchant = await Merchant.find({
            canteen: name
        })

        if (merchant) {
            return NextResponse.json({
                message: "Succes to find merchant",
                state: true,
                merchant: merchant
            }, { status: 200 })
        }
        else throw "Fail to find merchant"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            merchant: null,
            state: false
        }, { status: 400 })
    }
}