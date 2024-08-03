import { connectToDB } from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { username, password, occupation } = await request.json()
        const existUser = await User.findOne({ username: username })

        if (existUser) {
            return NextResponse.json({
                message: "Username already exist",
                availibility: false
            }, { status: 200 })
        }
        else {
            const user = await User.create({
                username: username,
                password: password,
                occupation: occupation
            })

            return NextResponse.json({
                message: "Success adding new user",
                user: user,
                availibility: true
            }, { status: 200 })
        }
    }
    catch (err) {
        return NextResponse.json({
            message: err,
            availibility: false
        }, { status: 400 })
    }

}
