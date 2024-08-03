import { json } from "stream/consumers"

async function createUser(
    username: string,
    password: string,
    occupation: number
) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/add`, {
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

    return result.json()
}

async function checkUser(
    username: string,
    password: string
) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/check`, {
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

async function information() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/information`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await result.json()
    return data.user
}

async function updateUser({
    name, email, telephone
}: {
    name: string | null,
    email: string | null,
    telephone: string | null
}) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/user/update`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: (name == "" ? null : name),
            email: (email == "" ? null : email),
            telephone: (telephone == "" ? null : telephone)
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await result.json()
    console.log(data)
    return data.user
}

export { createUser, checkUser, updateUser, logOut, information }