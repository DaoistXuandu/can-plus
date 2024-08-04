import Canteen from "@/app/models/merchant/Canteen";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { id } = await request.json()
        const canteen = await Canteen.findOne({ _id: id })

        if (!canteen)
            throw "Canteen Not Found"

        return NextResponse.json({
            message: "Success Fetching Data",
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