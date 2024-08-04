import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { id } = await request.json()
        const session = process.env.NEXT_PUBLIC_SESSION
        let cookie = null

        if (session)
            cookie = cookies().set(session, id)
        else
            throw "Invalid session name"

        return NextResponse.json({
            message: "Succes to create session",
            session: session,
            state: true,
        }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            session: null,
            state: false
        }, { status: 400 })
    }
}