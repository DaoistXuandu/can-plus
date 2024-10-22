import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        await connectToDB()
        const { username, password } = await request.json()

        const user = await Customer.findOne({ username: username, password: password });
        if (user) {
            const session = process.env.NEXT_PUBLIC_SESSION
            if (session)
                cookies().set({
                    name: session,
                    value: user._id,
                    httpOnly: true
                })

            return NextResponse.json({
                message: "Found Unique User",
                user: user,
                state: true
            }, { status: 200 })
        }
        else throw "Didn't found user"
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({
            message: err,
            user: null,
            state: false
        }, { status: 400 })
    }
}