"use client"

import Interface from "@/app/components/login/interface"
import { maven_pro } from "@/app/lib/font"

export default function Login() {
    return (
        <div className={`${maven_pro.className} w-screen h-screen login-background-image`}>
            <Interface />
        </div>
    )
}