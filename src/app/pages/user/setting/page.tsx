"use client"

import Content from "@/app/components/setting/content";
import NavBar from "@/app/components/setting/navbar";
import { noto_sans } from "@/app/lib/font";

export default function Setting() {
    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`h-screen w-full ${noto_sans.className} bg-white p-12`}>
            <NavBar />
            <Content />
        </div>
    )

}