"use client"

import Content from "@/app/components/customer/main/content/content"
import NavBar from "@/app/components/customer/main/navbar/navbar"
import { main_content } from "@/app/lib/content/customer/main"
import { maven_pro } from "@/app/lib/font"
import { url } from "inspector"
import { useEffect, useState } from "react"


export default function Main() {
    const [content, setContent] = useState<{ type: string, url: string }[]>([])
    const [load, setLoad] = useState(null)

    useEffect(() => {
        const url = [{
            type: "merchant",
            url: "66ef8c341239047321993eec"
        }, {
            type: "merchant",
            url: "66ef8c4a1239047321993eee"
        },
        {
            type: "canteen",
            url: "Kantin Asrama UI"
        },
        {
            type: "canteen",
            url: "Kantin FEB UI"
        }]

        if (!content.length) {
            let number_of_component = 15;
            let choices = url.length
            for (let i = 0; i < number_of_component; i++) {
                const choice = Math.floor(Math.random() * choices) as number
                setContent(prev => [...prev, url[choice]])
            }
        }
    }, [load])

    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`min-h-screen ${maven_pro.className}`}>
            <NavBar type={"Disekitar muu!!!"} />
            <Content content={content} />
        </div>
    )

}