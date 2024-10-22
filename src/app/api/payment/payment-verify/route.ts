import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { id } = await request.json()
        const env = process.env.MIDTRANS_SERVER
        if (env) {
            const result = await fetch(`${process.env.GATEWAY}.com/v2/${id}/status`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': env,
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(data => data)
            return NextResponse.json({
                message: "Get Data",
                payment: result,
                state: true
            }, { status: 200 })
        }
        else {
            throw "Access Denied"
        }
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            payment: null,
            state: false
        }, { status: 400 })
    }
}