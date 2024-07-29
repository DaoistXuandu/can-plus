"use client"

import Interface from "@/app/components/signUp/interface";
import { maven_pro } from "@/app/lib/font";

export default function Login() {
    return (
        <div className={`${maven_pro.className} h-screen login-background-image`}>
            <Interface />
        </div>
    )
}