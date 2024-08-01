"use client"

import Content from "@/app/components/customer/cart/content/content"
import NavBar from "@/app/components/customer/cart/navbar/navbar"
import { maven_pro } from "@/app/lib/font"

export default function Cart() {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`${maven_pro.className} min-h-screen h-fit w-full`}>
            <NavBar />
            <Content />
        </div>
    )
}