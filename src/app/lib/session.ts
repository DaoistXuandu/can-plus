import { cookies } from "next/headers"

function sessionCreate(
    id: string
) {
    const session = process.env.NEXT_PUBLIC_SESSION
    if (session) {
        cookies().set(session, id)
    }
}

function sessionGet(
) {
    const session = process.env.NEXT_PUBLIC_SESSION
    if (session) {
        return cookies().get(session)?.value
    }
}

function occupationCreate(
    occupation: string
) {
    const session = process.env.NEXT_PUBLIC_OCCUPATION
    if (session) {
        cookies().set(session, occupation)
    }
}

export { sessionCreate, sessionGet, occupationCreate }