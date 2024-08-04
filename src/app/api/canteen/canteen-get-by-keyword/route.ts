import Canteen from "@/app/models/merchant/Canteen";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { name } = await request.json()
        const pattern = new RegExp(name, 'i')
        const canteen = await Canteen.find({
            name: { $regex: pattern }
        })
        return NextResponse.json({
            message: "Succes getting cantenn with keyword",
            state: true,
            canteen: canteen
        }, { status: 400 })
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            state: false,
            canteen: null
        }, { status: 400 })
    }

}