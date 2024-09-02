"use client"
import Content from "@/app/components/merchant/order/content/content";
import NavBar from "@/app/components/merchant/order/navbar/navbar";
import { maven_pro } from "@/app/lib/font";

export default function Merchant() {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`${maven_pro.className} min-h-screen`}>
            <NavBar />
            <Content />
        </div>
    )
}