import { customerCreate } from "@/app/controller/customer";
import { merchantCreate } from "@/app/controller/merchant";
import { occupationCreate, sessionCreate } from "@/app/lib/session";
import { connectToDB } from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { username, password, occupation } = await request.json()
        const existUser = await User.findOne({ username: username })

        if (existUser) {
            throw "User with username already exist"
        }
        else {
            const user = await User.create({
                username: username,
                password: password,
                occupation: occupation
            })

            if (!user)
                throw "Didn't found user"

            let user_occupation = null;
            switch (occupation) {
                case 0:
                    user_occupation = await customerCreate({ userId: user._id })
                    occupationCreate("Customer")
                    break;
                default:
                    user_occupation = await merchantCreate({ userId: user._id })
                    occupationCreate("Merchant")
                    break;
            }

            sessionCreate(user_occupation.user._id)
            return NextResponse.json({
                message: "Success adding new user",
                user: user,
                user_occupation: user_occupation,
                availibility: true
            }, { status: 200 })
        }
    }
    catch (err) {
        return NextResponse.json({
            message: err,
            availibility: false
        }, { status: 400 })
    }

}
