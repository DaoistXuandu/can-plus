import { button_comment, data, logout_comment } from "@/app/lib/content/setting";
import Input from "./input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { information, logOut } from "@/app/lib/controller/user";
import { url } from "inspector";

export default function Content() {
    const router = useRouter()
    const img = useRef<HTMLImageElement>(null)
    const [dataRequired, setDataRequired] = useState(new Array<{ name: string, value: string }>(3))
    const [dataNormal, setDataNormal] = useState(new Array<{ name: string, value: string }>(1))

    async function getInformation() {
        const info = await information()
        if (info) {
            const info_required = [
                {
                    name: "Nama Lengkap",
                    value: info.name
                },
                {
                    name: "No Telephone",
                    value: info.telephone
                },
                {
                    name: "Email",
                    value: info.email
                }
            ]

            const info_username = [
                {
                    name: "Username",
                    value: info.username
                }
            ]

            setDataNormal(info_username)
            setDataRequired(info_required)
        }
    }

    useEffect(() => {
        getInformation()
    }, [])

    function handleFile(file: HTMLInputElement) {
        console.log(file)
        const current_image = img.current as HTMLImageElement
        if (file.files && file.files.length > 0) {
            const url = file.value
            current_image.src = URL.createObjectURL(new Blob([file.files[0].name]));
            console.log(current_image)
            let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
            if (file.files && file.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    if (e.target?.result) {
                        current_image.setAttribute('src', e.target.result as string);
                    }
                }
                reader.readAsDataURL(file.files[0]);
            }
        }
    }

    return (
        <div className="flex flex-col space-y-16 md:space-y-6   ">
            <div className="mt-16 flex flex-col space-y-2">
                <h1 className="text-black text-xl font-bold">{data.image.name}</h1>
                <div className={`relative w-28 h-28 bg-gray-400 flex items-center justify-center rounded-full`}>
                    <p className="font-bold absolute z-10 cursor-pointer">{data.image.input}</p>
                    <input type="file" className="relative z-20 opacity-0 h-full w-full cursor-pointer" onChange={e => handleFile(e.target)} />
                    <img ref={img} className="absolute z-0 w-28 h-28 top-0 right-0 rounded-full" src="" alt="" />
                </div>
            </div>
            <div className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    {
                        dataRequired.map((item, index) => (
                            <Input name={item.name} index={index} data={item.value} required={true} />
                        ))
                    }
                </div>
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    {
                        dataNormal.map((item, index) => (
                            < Input name={item.name} index={index + 3} data={item.value} required={false} />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col space-y-5 w-full lg:w-1/3">
                <button style={{ backgroundColor: "#F4D03F" }} className=" w-full flex justify-center p-4 pl-20 pr-20 bg-yellow-300 w-fit rounded-full font-bold text-white text-lg">
                    {button_comment}
                </button>
                <button
                    className="bg-yellow-500 w-full bg-flex justify-center p-4 pl-20 pr-20 bg-yellow-300 w-fit rounded-full font-bold text-white text-lg"
                    onClick={e => { router.push("/"); logOut() }}>
                    {logout_comment}
                </button>
            </div>
        </div>
    )
}