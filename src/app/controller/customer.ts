import { response } from "express"
import mongoose from "mongoose"
import { json } from "stream/consumers"
import { data } from "../lib/content/setting"

async function customerCreate({ userId }: { userId: mongoose.Types.ObjectId }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/customer/customer-create`, {
        method: 'POST',
        body: JSON.stringify({
            userId: userId
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

async function customerGet() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/customer/customer-get`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result.user
}

async function customerUpdate({
    name, email, telephone, image
}: {
    name: string | null,
    email: string | null,
    telephone: string | null,
    image: string | null,
}) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/customer/customer-update`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
            email: email,
            telephone: telephone,
            image: image
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await result.json()
    return data.user
}

export { customerCreate, customerGet, customerUpdate }