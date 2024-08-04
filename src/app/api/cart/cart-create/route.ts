import { connectToDB } from "@/app/lib/dbConnect";
import Cart from "@/app/models/customer/Cart";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const result = await Cart.create({})
        if (result) {
            return NextResponse.json({
                message: "Success Creating a Cart",
                state: true,
                cart: result
            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                message: "Failed Creating a Cart",
                state: false
            }, { status: 404 })
        }
    }
    catch (err) {
        return NextResponse.json({
            message: err,
            state: false
        }, { status: 400 })
    }

}
