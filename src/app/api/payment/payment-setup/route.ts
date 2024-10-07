import { menuGet } from "@/app/controller/menu";
import { paymentSet } from "@/app/controller/payment";
import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const order = await paymentSet()
        if (order) {
            return NextResponse.json({
                message: "Succes getting total",
                state: true,
                ordr: order
            }, { status: 200 })
        }
        else throw "Fail to get total"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            section: null,
            state: false
        }, { status: 400 })
    }
}