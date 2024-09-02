import { occupationCreate, sessionCreate } from "@/app/lib/session";
import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import Merchant from "@/app/models/merchant/Merchant";
import User from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { username, password } = await request.json()

        const result = await User.findOne({
            username: username,
            password: password
        })

        if (result) {
            switch (result.occupation) {
                case 0:
                    const customer = await Customer.findOne({ userId: result._id })
                    // console.log(customer)
                    if (!customer)
                        throw "User have no customer occupation position"

                    sessionCreate(customer._id)
                    occupationCreate("Customer")
                    break;
                default:
                    const merchant = await Merchant.findOne({ userId: result._id })
                    if (!merchant)
                        throw "User have no merchant occupation position"

                    sessionCreate(merchant._id)
                    occupationCreate("Merchant")
                    break;
            }

            return NextResponse.json({
                message: "Found Unique User",
                state: true
            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                message: "Username or Password is wrong",
                state: false
            }, { status: 404 })
        }
    }
    catch (err) {
        return NextResponse.json({
            message: "Err:" + err,
            state: false
        }, { status: 400 })
    }
}