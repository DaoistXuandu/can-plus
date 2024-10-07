import { connectToDB } from "@/app/lib/dbConnect";
import Section from "@/app/models/merchant/Section";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { merchantId, name } = await request.json()

        const section = await Section.create({
            merchantId: merchantId,
            name: name
        })

        if (section) {
            return NextResponse.json({
                message: "Succes to create section",
                state: true,
                section: section
            }, { status: 200 })
        }
        else throw "Fail to create section"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            section: null,
            state: false
        }, { status: 400 })
    }
}