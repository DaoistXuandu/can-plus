import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const session = process.env.NEXT_PUBLIC_SESSION
        let result = null
        if (session)
            result = cookies().delete(session)

        if (result) {
            return NextResponse.json({
                message: "Success to Log Out",
                state: true
            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                message: "Failed to Log Out",
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