import { response } from "express"
import mongoose from "mongoose"

async function merchantCreate(canteen: string, name: string, image: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/merchant/merchant-create`, {
        method: 'POST',
        body: JSON.stringify({
            canteen: canteen,
            name: name,
            image: image
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

async function merchantGet(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/merchant/merchant-get`, {
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
    return result.user
}

async function merchantGetAll(name: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/merchant/merchant-get-all`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.merchant
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

export { merchantCreate, merchantGet, merchantUpdate, merchantGetAll }