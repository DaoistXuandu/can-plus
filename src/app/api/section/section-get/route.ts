import { connectToDB } from "@/app/lib/dbConnect";
import Section from "@/app/models/merchant/Section";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { id } = await request.json()

        const section = await Section.findOne({
            _id: id,
        })

        if (section) {
            return NextResponse.json({
                message: "Succes to get section",
                state: true,
                section: section
            }, { status: 200 })
        }
        else throw "Fail to get section"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            section: null,
            state: false
        }, { status: 400 })
    }
}