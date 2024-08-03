import { connectToDB } from "@/app/lib/dbConnect";
import User from "@/app/models/User";
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
            const user = await User.findById(id)
            return NextResponse.json({
                message: "Found Unique User",
                user: user,
                state: true
            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                message: "Username or Password is wrong",
                user: null,
                state: false
            }, { status: 404 })
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