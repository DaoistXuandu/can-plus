"use client"
import Content from "@/app/components/customer/merchant/content/content";
import NavBar from "@/app/components/customer/merchant/navbar/navbar";
import { merchantGet } from "@/app/controller/merchant";
import { maven_pro } from "@/app/lib/font";
import { useEffect, useState } from "react";

export default function Merchant({ params }: { params: { id: string } }) {
    const [data, setData] = useState<{
        canteen: string,
        name: string,
        image: string,
        description: string,
        rating: string,
        time_open: Date,
        time_close: Date,
        email: string,
        telephone: string
    }>({
        canteen: "",
        name: "",
        image: "",
        description: "",
        rating: "",
        time_open: new Date(),
        time_close: new Date(),
        email: "",
        telephone: ""
    })

    async function getData() {
        const merchant = await merchantGet(params.id)
        setData(merchant)
    }

    useEffect(() => {
        getData()
    }, [params])


    return (
        <div style={{ backgroundColor: "#ECF0F1" }} className={`${maven_pro.className} min-h-screen`}>
            <NavBar id={params.id} merchant={data} />
            <Content id={params.id} />
        </div>
    )
}