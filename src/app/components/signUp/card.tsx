import { body, title } from "@/app/lib/content/signup";
import Input from "./input";
import { useEffect, useState } from "react";
import Choice from "./choice";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function Card() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [choice, setChoice] = useState(1)

    const router = useRouter()

    function handleLogin() {
        router.push("/pages/customer/main")
        console.log(username, password, confirm, choice)
    }

    return (
        <form style={{ backgroundColor: "#7D6608" }} className={`h-fit w-fit md:w-full bg-rose-200 rounded-2xl shadow-2xl p-10 pt-12 flex flex-col`} action={handleLogin}>
            <h1 className="w-full flex justify-center text-6xl font-bold">{title}</h1>
            <div className="mt-12 flex flex-col space-y-6">
                <Input name={body.username} setValue={setUsername} type="text" />
                <Input name={body.password.init} setValue={setPassword} type="password" />
                <Input name={body.password.confirm} setValue={setConfirm} type="password" />
            </div>
            <div className="mt-5 flex flex-col space-y-4">
                <h1 className="font-medium text-md">{body.type.title}</h1>
                <div className="w-full flex flex-row space-x-5">
                    <div className="w-1/2">
                        <Choice choice={choice} name={body.type.first} setStatus={setChoice} index={1} />
                    </div>
                    <div className="w-1/2">
                        <Choice choice={choice} name={body.type.second} setStatus={setChoice} index={2} />
                    </div>
                </div>
            </div>
            <div>
                <Button />
            </div>
        </form>
    )
}