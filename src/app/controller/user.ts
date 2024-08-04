import { response } from "express"
import mongoose from "mongoose"

async function userCreate(
    username: string,
    password: string,
    occupation: number
) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/user-create`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
            occupation: occupation
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result
}

async function userCheck(
    username: string,
    password: string
) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/user-check`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await result.json()
    return data.state
}


async function userGet({ id }: { id: mongoose.Types.ObjectId }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/user-get`, {
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

async function logOut() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/logout`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await result.json()
    return data
}

export { userCreate, userCheck, userGet, logOut }