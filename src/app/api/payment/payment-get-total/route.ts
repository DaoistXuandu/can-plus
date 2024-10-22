import { menuGet } from "@/app/controller/menu";
import { merchantGet } from "@/app/controller/merchant";
import { connectToDB } from "@/app/lib/dbConnect";
import Order from "@/app/models/customer/Order";
import Section from "@/app/models/merchant/Section";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { couldStartTrivia } from "typescript";

export async function PATCH(request: NextRequest) {
    const { status } = await request.json()

    async function getMenu(id: string) {
        const data = await menuGet(id)
        return data
    }

    try {
        await connectToDB()
        let user = null
        const session = process.env.NEXT_PUBLIC_SESSION
        if (session)
            user = cookies().get(session)?.value

        if (!user)
            throw "Invalid Session"

        const order = await Order.find({
            customerId: user
        })


        let food = 0
        for (let i = 0; i < order.length; i++) {
            const menu = await getMenu(order[i].menuId)
            food += order[i].quantity * Number(menu.price)
        }

        // let delivery = 1500
        let delivery = 3000 * (status ? 1 : 0)
        let cost = 1000
        let total = food + delivery + cost


        if (order) {
            return NextResponse.json({
                message: "Succes getting total",
                state: true,
                total: total,
                food: food,
                delivery: delivery
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