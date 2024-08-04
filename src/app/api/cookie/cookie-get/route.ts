import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { name } = await request.json()
        const cookie = cookies().get(name)

        return NextResponse.json({
            message: "Succes to get cookie",
            cookie: cookie,
            state: true,
        }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            cookie: null,
            state: false
        }, { status: 400 })
    }
}