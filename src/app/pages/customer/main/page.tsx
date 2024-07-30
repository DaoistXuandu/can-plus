"use client"

import NavBar from "@/app/components/customer/main/navbar/navbar"
import { maven_pro } from "@/app/lib/font"

export default function Main() {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`min-h-screen ${maven_pro.className}`}>
            <NavBar />
        </div>
    )

}