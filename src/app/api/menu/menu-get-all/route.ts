import { menu } from "@/app/lib/content/customer/restaurant";
import { connectToDB } from "@/app/lib/dbConnect";
import Menu from "@/app/models/merchant/Menu";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        let { sectionId } = await request.json()

        const menu = await Menu.find({
            sectionId: sectionId,
        })

        if (menu) {
            return NextResponse.json({
                message: "Succes to create menu",
                state: true,
                menu: menu
            }, { status: 200 })
        }
        else throw "Fail to create menu"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            menu: null,
            state: false
        }, { status: 400 })
    }
}