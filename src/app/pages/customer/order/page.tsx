"use client"
import Content from "@/app/components/customer/order/content/content"
import NavBar from "@/app/components/customer/order/navbar/navbar"
import { maven_pro } from "@/app/lib/font"

export default function Order() {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`${maven_pro.className} min-h-screen h-fit w-full`}>
            <NavBar />
            <Content />
        </div>
    )
}