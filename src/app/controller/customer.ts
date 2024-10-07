import { response } from "express"
import { headers } from "next/headers"
import { data } from "../lib/content/setting"
import { merchantGet } from "./merchant"

async function customerCreate(username: string, password: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/customer/customer-create`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

async function customerGetMerchant() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/customer/customer-get-merchant`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result.merchant
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

async function customerCheck(username: string, password: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/customer/customer-check`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => data)



    return result.state
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
    return data.update
}

async function customerLogOut() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/logout`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    const data = await result.json()
    return data.state
}

async function customerUpdateMerchant(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/customer/customer-update-merchant`, {
        method: 'PATCH',
        body: JSON.stringify({
            merchantId: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await result.json()
    return data.customer
}

export { customerCreate, customerGetMerchant, customerGet, customerUpdate, customerCheck, customerLogOut, customerUpdateMerchant }