import { response } from "express"
import mongoose from "mongoose"

async function merchantCreate({ userId }: { userId: mongoose.Types.ObjectId }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/merchant/merchant-create`, {
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

async function merchantGet() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/merchant/merchant-get`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.user
}

async function merchantUpdate({
    name, email, telephone, image, canteenId
}: {
    name: string | null,
    email: string | null,
    telephone: string | null,
    image: string | null,
    canteenId: mongoose.Types.ObjectId | null
}) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/merchant/merchant-update`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
            email: email,
            telephone: telephone,
            image: image,
            canteenId: canteenId
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.user)

    return result
}

export { merchantCreate, merchantGet, merchantUpdate }