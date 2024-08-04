import { connectToDB } from "@/app/lib/dbConnect";
import { sessionGet } from "@/app/lib/session";
import Merchant from "@/app/models/merchant/Merchant";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectToDB()
        const id = sessionGet()
        const merchant = await Merchant.findOne({
            _id: id
        })

        if (merchant) {
            return NextResponse.json({
                message: "Succes to find merchant",
                state: true,
                user: merchant
            }, { status: 200 })
        }
        else throw "Fail to find merchant"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            user: null,
            state: false
        }, { status: 400 })
    }
}