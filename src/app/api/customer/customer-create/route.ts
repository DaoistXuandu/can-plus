import { cartCreate } from "@/app/controller/cart";
import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { userId } = await request.json()

        const cart = await cartCreate()
        const cartId = cart.cart._id

        if (cartId && userId) {
            const customer = await Customer.create({
                userId: userId,
                cartId: cartId
            })

            if (customer) {
                return NextResponse.json({
                    message: "Success creating new customer",
                    state: true,
                    user: customer
                })
            }
            else {
                throw "Error in creating"
            }
        }
        else {
            throw "No cart or id found"
        }
    }
    catch (err) {
        return NextResponse.json({
            message: err,
            state: false,
            user: null
        }, { status: 400 })
    }
}