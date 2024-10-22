import { cursorTo } from "readline"
import { menu } from "../lib/content/customer/restaurant"
import { customerGet } from "./customer"
import { menuGet } from "./menu"
import { orderGetAll, orderGetAllTransaction } from "./order"

async function paymentGet() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/payment/payment-get-total`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result
}

async function paymentVerify(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/payment/payment-verify`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result
}

// rewrite --> prio
async function paymentCreateClient({ transactionId, total }: { transactionId: string, total: number }) {
    const order = await orderGetAllTransaction(transactionId)
    const customer = await customerGet()
    let data = []
    for (const menu of order) {
        let current = await menuGet(menu.menuId)
        data.push({
            "id": menu._id,
            "price": current.price,
            "quantity": menu.quantity,
            "name": current.name
        })
    };
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/payment/payment-setup`, {
        method: 'POST',
        body: JSON.stringify({
            transactionId: transactionId,
            total: total,
            data: data,
            customer: customer
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result

}

export { paymentGet, paymentVerify, paymentCreateClient }