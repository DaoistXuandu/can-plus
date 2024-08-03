import getSession from "@/app/lib/getSession";
import strToObj from "@/app/lib/mongoConvert";
import User from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        let {
            name = null,
            telephone = null,
            email = null
        } = await request.json()

        const id = strToObj(getSession() as string)
        const user = await User.findById(id)
        console.log(id)

        if (user) {
            if (!name)
                name = user.name
            if (!telephone)
                telephone = user.telephone
            if (!email)
                email = user.email

            let update = await User.findByIdAndUpdate(
                { _id: id },
                {
                    name: name,
                    telephone: telephone,
                    email: email,
                },
                { new: true }
            )

            return NextResponse.json(
                {
                    message: "Success Update User",
                    state: true,
                    update: update
                },
                { status: 200 }
            )
        }
        else {
            return NextResponse.json(
                {
                    message: "Fail to Update User",
                    state: false,
                    update: null
                },
                { status: 404 }
            )
        }
    }
    catch (err) {
        return NextResponse.json({ message: err }, { status: 400 })
    }
}