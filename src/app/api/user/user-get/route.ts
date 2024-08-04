import User from "@/app/models/User";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { id } = await request.json()
        const user = await User.findOne({ _id: id })

        if (user) {
            return NextResponse.json({
                message: "Success to get user",
                user: user,
                state: true
            }, { status: 200 })
        }
        else {
            throw "User not found"
        }
    }
    catch (err) {
        return NextResponse.json({
            message: "err: " + err,
            user: null,
            state: false
        }, { status: 400 })
    }
}