import { customerUpdateTransaction } from "@/app/controller/customer";
import { transactionCreate } from "@/app/controller/transaction";
import { connectToDB } from "@/app/lib/dbConnect";
import Customer from "@/app/models/customer/Customer";
import Order from "@/app/models/customer/Order";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB()
        const { menuId, quantity } = await request.json()

        let customer = null
        let env = process.env.NEXT_PUBLIC_SESSION
        if (env) {
            let cookie = cookies().get(env)?.value
            if (cookie)
                customer = await Customer.findOne({ _id: cookie })
        }

        // if (customer != null && (customer.transaction == null || customer.transaction == "" || customer.transaction == undefined)) {
        //     const transaction = await transactionCreate(customer._id)
        //     const update = await Customer.findOneAndUpdate(
        //         { _id: customer._id },
        //         { transaction: transaction },
        //         { new: true }
        //     )
        // }

        const order = await Order.create({
            customerId: customer._id,
            menuId: menuId,
            quantity: quantity
        })

        if (order) {
            return NextResponse.json({
                message: "Succes to create order",
                state: true,
                order: order
            }, { status: 200 })
        }
        else throw "Fail to create order"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            order: null,
            state: false
        }, { status: 400 })
    }
}