"use client"
import Content from "@/app/components/merchant/rating/content/content"
import NavBar from "@/app/components/merchant/rating/navbar/navbar"
import { maven_pro } from "@/app/lib/font"

export default function Order() {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`${maven_pro.className} min-h-screen h-fit w-full`}>
            <NavBar />
            <Content />
        </div>
    )
}