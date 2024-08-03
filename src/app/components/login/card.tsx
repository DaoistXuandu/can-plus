import { body, title } from "@/app/lib/content/login";
import Input from "./input";
import { useEffect, useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
import { error_alert, ok_alert } from "@/app/lib/alert";
import { checkUser } from "@/app/lib/controller/user";

export default function Card() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)
    const router = useRouter()

    async function handleLogin() {
        if (username == "" || password == "") {
            error_alert("Username dan Password Tidak Boleh Kosong!!")
            return
        }

        setDisabled(true)
        const result = await checkUser(username, password)
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
        <div style={{ backgroundColor: "#7D6608" }} className={`h-fit w-fit md:w-full bg-rose-200 rounded-2xl shadow-2xl p-10 pt-12 flex flex-col`}>
            <h1 className="w-full flex justify-center text-6xl font-bold">{title}</h1>
            <div className="mt-12 flex flex-col space-y-6">
                <Input name={body.username} setValue={setUsername} type="text" />
                <Input name={body.password} setValue={setPassword} type="password" />
            </div>
            <div>
                <Button disabled={disabled} handle={handleLogin} />
            </div>
        </div>
    )
}