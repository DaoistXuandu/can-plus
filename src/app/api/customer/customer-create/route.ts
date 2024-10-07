import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { username, password } = await request.json()

        if (username && password) {
            const exist = await Customer.findOne({ username: username })
            if (exist) {
                throw "User with this username already exist"
            }

            const customer = await Customer.create({
                username: username,
                password: password
            })

            if (customer) {
                let customer_id = customer._id
                let session = process.env.NEXT_PUBLIC_SESSION
                if (session)
                    cookies().set(session, customer_id)

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
            throw "Usernama or password incomplete"
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