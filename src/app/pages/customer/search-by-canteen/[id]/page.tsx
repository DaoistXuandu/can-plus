"use client"

import Content from "@/app/components/customer/main/content/content"
import NavBar from "@/app/components/customer/main/navbar/navbar"
import { merchantGetAll } from "@/app/controller/merchant"
import { maven_pro } from "@/app/lib/font"
import { useState, useEffect } from "react"

export default function Main({ params }: { params: { id: string } }) {
    const [content, setContent] = useState<{ type: string, url: string }[]>([])
    const [title, setTitle] = useState<string>("")

    async function getMerchant() {
        const data = await merchantGetAll(parseId())
        // console.log(data, parseId())
        const dataLen = data.length
        let number_of_component = 5;
        let newComp = []

        for (let i = 0; i < number_of_component; i++) {
            let currentData = {
                type: "merchant",
                url: data[getUrl(dataLen)]._id
            }
            newComp.push(currentData)
        }
        // console.log(newComp)
        setContent(newComp)
    }

    function parseId() {
        const split_params = params.id.split("%20")
        let temp = ""
        split_params.forEach(item => temp += item + " ")
        return temp.trim()
    }

    function getUrl(len: number) {
        return Math.floor(Math.random() * len)
    }

    useEffect(() => {
        // console.log(content)
    }, [content])

    useEffect(() => {
        getMerchant()
        setTitle(parseId())
    }, [params])

    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`min-h-screen ${maven_pro.className}`}>
            <NavBar type={"Warung makan di sekitar " + title} />
            {
                (content == undefined || content == null) ? "Loading" :
                    <Content content={content} />
            }
        </div>
    )

}