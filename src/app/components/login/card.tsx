import { body, title } from "@/app/lib/content/login";
import Input from "./input";
import { FormEvent, useEffect, useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
import { error_alert, ok_alert } from "@/app/lib/alert";
import { customerCheck, customerGet } from "@/app/controller/customer";

export default function Card() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)
    const router = useRouter()

    async function handleLogin(e: FormEvent) {
        e.preventDefault()
        if (username == "" || password == "") {
            error_alert("Username dan Password Tidak Boleh Kosong!!")
            return
        }

        setDisabled(true)
        const result = await customerCheck(username, password)
        if (result) {
            ok_alert("Login Berhasil", "")
            router.push("/pages/customer/main")
        }
        else {
            error_alert("Username atau Password Salah")
            setDisabled(false)
        }
    }

    return (
        <form style={{ backgroundColor: "#7D6608" }} className={`h-fit w-fit md:w-full bg-rose-200 rounded-2xl shadow-2xl p-10 pt-12 flex flex-col`} onSubmit={handleLogin}>
            <h1 className="w-full flex justify-center text-6xl font-bold">{title}</h1>
            <div className="mt-12 flex flex-col space-y-6">
                <Input name={body.username} setValue={setUsername} type="text" />
                <Input name={body.password} setValue={setPassword} type="password" />
            </div>
            <div>
                <Button disabled={disabled} />
            </div>
        </form>
    )
}