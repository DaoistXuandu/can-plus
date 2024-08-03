import { cookies } from "next/headers";

export default function getSession() {
    const cookie = cookies().get("set-session-canplus")
    if (cookie)
        return cookie.value
    else
        return null
}
