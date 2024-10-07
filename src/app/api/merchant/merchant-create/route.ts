import { connectToDB } from "@/app/lib/dbConnect";
import Merchant from "@/app/models/merchant/Merchant";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { canteen, name, image, description, rating, time_open, time_close, email, telephone } = await request.json()

        const merchant = await Merchant.create({
            canteen: canteen,
            name: name,
            image: image,
            description: description || "",
            rating: rating || "",
            time_close: time_close || new Date(),
            time_open: time_open || new Date(),
            email: email || "",
            telephone: telephone || ""
        })

        if (merchant) {
            return NextResponse.json({
                message: "Succes to create merchant",
                state: true,
                user: merchant
            }, { status: 200 })
        }
        else throw "Fail to create merchant"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            user: null,
            state: false
        }, { status: 400 })
    }
}