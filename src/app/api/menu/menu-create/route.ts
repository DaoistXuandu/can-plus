import { menu } from "@/app/lib/content/customer/restaurant";
import { connectToDB } from "@/app/lib/dbConnect";
import Menu from "@/app/models/merchant/Menu";
import Section from "@/app/models/merchant/Section";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        let { sectionId, name, price, image } = await request.json()
        image = image || "https://utfs.io/f/GEsKkob52KUwwnU17agMVXClUZgNA1mi0y9OS8qDenoEYuxv"

        const menu = await Menu.create({
            sectionId: sectionId,
            name: name,
            price: price,
            image: image
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