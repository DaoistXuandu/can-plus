import { utimes } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { transactionId, total, data, customer } = await request.json()
        const env = process.env.MIDTRANS_SERVER
        if (env) {
            // const url = 'https://api.midtrans.com/v2/charge';
            const url = `${process.env.GATEWAY}.com/v2/charge`;
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: env
                },
                body: JSON.stringify({
                    payment_type: 'qris',
                    transaction_details: { order_id: transactionId, gross_amount: total },
                    customer_details: {
                        first_name: customer.name,
                        last_name: '',
                        email: customer.email,
                        phone: customer.telephone,
                    },
                })
            };

            const result = await fetch(url, options)
                .then(response => response.json())
                .then(data => data)

            console.log(result)


            if (result) {
                return NextResponse.json({
                    message: "Succes getting total",
                    state: true,
                    payment: result
                }, { status: 200 })
            }
            throw result

        }
        else throw "Can't get env"
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            payment: null,
            state: false
        }, { status: 400 })
    }
}