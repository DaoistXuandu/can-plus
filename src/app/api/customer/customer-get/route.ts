import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectToDB()
        const cookie = cookies().get("set-session-canplus")

        if (cookie) {
            let value = cookie.value;
            let id = mongoose.Types.ObjectId.createFromHexString(value);
            const user = await Customer.findById(id)
            if (user) {
                return NextResponse.json({
                    message: "Found Unique User",
                    user: user,
                    state: true
                }, { status: 200 })
            }
            else throw "Didn't found user"
        }
        else {
            throw "Session invalid"
        }
    }
    catch (err) {
        return NextResponse.json({
            message: err,
            user: null,
            state: false
        }, { status: 400 })
    }
}