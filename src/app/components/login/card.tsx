import { body, title } from "@/app/lib/content/login";
import Input from "./input";
import { useEffect, useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function Card() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    function handleLogin() {
        router.push("/pages/customer/main")
        console.log(username, password)
    }

    return (
        <form style={{ backgroundColor: "#7D6608" }} className={`h-fit w-fit md:w-full bg-rose-200 rounded-2xl shadow-2xl p-10 pt-12 flex flex-col`} action={handleLogin}>
            <h1 className="w-full flex justify-center text-6xl font-bold">{title}</h1>
            <div className="mt-12 flex flex-col space-y-6">
                <Input name={body.username} setValue={setUsername} type="text" />
                <Input name={body.password} setValue={setPassword} type="password" />
            </div>
            <div>
                <Button />
            </div>
        </form>
    )
}