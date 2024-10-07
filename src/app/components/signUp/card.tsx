import { body, title } from "@/app/lib/content/signUp";
import Input from "./input";
import { FormEvent, useEffect, useState } from "react";
import Choice from "./choice";
import Button from "./button"
import { useRouter } from "next/navigation";
import { error_alert, ok_alert } from "@/app/lib/alert";
import { customerCreate } from "@/app/controller/customer";

export default function Card() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [choice, setChoice] = useState(1)
    const [disabled, setDisabled] = useState(false)

    const router = useRouter()

    async function handleSignUp(e: FormEvent) {
        e.preventDefault()

        if (username == "" || password == "" || confirm == "") {
            error_alert("Username, Password atau Konfirmasi tidak boleh kosong")
            return
        }

        if (password != confirm) {
            error_alert("Password dan Konfirmasi Password tidak sama!")
            return
        }

        setDisabled(true)
        const result = await customerCreate(username.trim(), password)
        if (!result.state) {
            error_alert(result.message)
            setDisabled(false)
            return;
        }
        else
            ok_alert(
                "Anda Telah Ditambahkan!!",
                "Jangan Lupa Untuk Mengisi Profil Anda"
            )

        setDisabled(false)
        router.push("/pages/customer/main")
    }


    return (
        <form
            onSubmit={handleSignUp}
            style={{ backgroundColor: "#7D6608" }} className={`h-fit w-fit md:w-full bg-rose-200 rounded-2xl shadow-2xl p-10 pt-12 flex flex-col`}>
            <h1 className="w-full flex justify-center text-6xl font-bold">{title}</h1>
            <div className="mt-12 flex flex-col space-y-6">
                <Input name={body.username} setValue={setUsername} type="text" />
                <Input name={body.password.init} setValue={setPassword} type="password" />
                <Input name={body.password.confirm} setValue={setConfirm} type="password" />
            </div>
            {/* <div className="mt-5 flex flex-col space-y-4">
                <h1 className="font-medium text-md">{body.type.title}</h1>
                <div className="w-full flex flex-row space-x-5">
                    <div className="w-full">
                        <Choice choice={choice} name={body.type.first} setStatus={setChoice} index={1} />
                    </div>
                    <div className="w-1/2">
                        <Choice choice={choice} name={body.type.second} setStatus={setChoice} index={2} />
                    </div> 
                </div>
            </div> */}
            <div>
                <Button disabled={disabled} />
            </div>
        </form>
    )
}