"use client"

import { useEffect } from "react"

export default function Test() {
    async function test() {
        // const a = await createSession("123")
        // const result = await merchantCreate({
        //     userId: mongoose.Types.ObjectId.createFromHexString("66ae5be2297b3a4daa5d49e5")
        // })
        // console.log(result)
    }

    useEffect(() => {
        test()
    }, [])

    return (
        <div className="h-screen bg-white text-black">TEST</div>
    )
}