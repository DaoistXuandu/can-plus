import { connectToDB } from "@/app/lib/dbConnect";
import Canteen from "@/app/models/merchant/Canteen";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { name, location } = await request.json()

        const result = await Canteen.create({
            name: name,
            location: location
        })

        if (result) {
            return NextResponse.json({
                message: "Success Creating a Canteen",
                state: true,
                canteen: result
            }, { status: 200 })
        }
        else {
            throw "Failed Creating a Canteen"
        }
    }
    catch (err) {
        return NextResponse.json({
            message: err,
            canteen: null,
            state: false
        }, { status: 400 })
    }

}
