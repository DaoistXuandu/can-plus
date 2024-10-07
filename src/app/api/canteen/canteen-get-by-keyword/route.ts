import { canteen } from "@/app/lib/content/customer/canteen";
import Canteen from "@/app/models/merchant/Canteen";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { name } = await request.json()
        const canteen = await Canteen.findOne({
            name: name
        })
        return NextResponse.json({
            message: "Succes getting a cantenn with keyword",
            state: true,
            canteen: canteen
        }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            state: false,
            canteen: null
        }, { status: 400 })
    }

}