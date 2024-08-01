"use client"

import Content from "@/app/components/customer/main/content/content"
import NavBar from "@/app/components/customer/main/navbar/navbar"
import { main_content } from "@/app/lib/content/customer/main"
import { maven_pro } from "@/app/lib/font"

export default function Main() {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`min-h-screen ${maven_pro.className}`}>
            <NavBar type={1} />
            <Content content={main_content[1]} />
        </div>
    )

}