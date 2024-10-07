import { sessionGet } from "@/app/lib/session";
import Merchant from "@/app/models/merchant/Merchant";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        let {
            id,
            name,
            telephone,
            email,
            image,
            canteen,
            description,
            rating,
            time_open,
            time_close,
        } = await request.json()

        id = new mongoose.Types.ObjectId(id)
        const user = await Merchant.findOne({ _id: id })

        if (user) {
            if (name == null)
                name = user.name
            if (telephone == null)
                telephone = user.telephone
            if (email == null)
                email = user.email
            if (image == null)
                image = user.image
            if (canteen == null)
                canteen = user.canteen
            if (description == null)
                description = user.description
            if (rating == null)
                rating = user.rating
            if (time_open == null)
                time_open = user.time_open
            if (time_close == null)
                time_close = user.time_close

            let update = await Merchant.findByIdAndUpdate(
                { _id: id },
                {
                    name: name,
                    telephone: telephone,
                    email: email,
                    image: image,
                    canteen: canteen,
                    description: description,
                    rating: rating,
                    time_open: time_open,
                    time_close: time_close,
                },
                { new: true }
            )

            return NextResponse.json(
                {
                    message: "Success Update Merchant",
                    state: true,
                    update: update
                },
                { status: 200 }
            )
        }
        else {
            return NextResponse.json(
                {
                    message: "Fail to Update Merchant",
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