import { connectToDB } from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { username, password } = await request.json()

        const result = await User.findOne({
            username: username,
            password: password
        })

        if (result) {
            const id = result._id.toString()
            cookies().set("set-session-canplus", id)
            return NextResponse.json({
                message: "Found Unique User",
                state: true
            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                message: "Username or Password is wrong",
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