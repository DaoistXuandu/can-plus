import { sessionGet } from "@/app/lib/session";
import Customer from "@/app/models/customer/Customer";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        let {
            name,
            telephone,
            email,
            image
        } = await request.json()

        const id = sessionGet()
        const user = await Customer.findById(id)

        if (user) {
            if (name == null)
                name = user.name
            if (telephone == null)
                telephone = user.telephone
            if (email == null)
                email = user.email
            if (image == null)
                image = user.image

            let update = await Customer.findByIdAndUpdate(
                { _id: id },
                {
                    name: name,
                    telephone: telephone,
                    email: email,
                    image: image
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