"use client"
import Content from "@/app/components/customer/orderId/content/content"
import NavBar from "@/app/components/customer/orderId/navbar/navbar"
import { maven_pro } from "@/app/lib/font"

export default function Order({ params }: { params: { id: string } }) {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`${maven_pro.className} min-h-screen h-fit w-full`}>
            <NavBar />
            <Content id={params.id} />
        </div>
    )
}