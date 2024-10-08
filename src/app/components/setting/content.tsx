import { button_comment, data, logout_comment } from "@/app/lib/content/setting";
import Input from "./input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { ok_alert } from "@/app/lib/alert";
import { customerGet, customerLogOut, customerUpdate } from "@/app/controller/customer";

export default function Content() {
    const router = useRouter()
    const img = useRef<HTMLImageElement>(null)
    const [dataRequired, setDataRequired] = useState(new Array<{ name: string, value: string }>(3))
    const [dataNormal, setDataNormal] = useState(new Array<{ name: string, value: string }>(1))
    const [imgUrl, setImgUrl] = useState("")
    // const [location, setLocation] = useState(new Array<{ name: string, location: string }>(1))
    const [location, setLocation] = useState("")

    async function getInformation() {
        let info = await customerGet()

        const user_env = process.env.NEXT_PUBLIC_SESSION
        let user = null
        if (user_env) {
            user = await customerGet()
        }

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

            const info_normal = [
                {
                    name: "Username",
                    value: user.username
                }
            ]

            setDataNormal(info_normal)
            setDataRequired(info_required)
            setImgUrl(info.image)
        }
    }

    useEffect(() => {
        getInformation()
    }, [])

    async function updateImage(file: string) {
        const update = await customerUpdate({
            name: null,
            email: null,
            telephone: null,
            image: file
        })
    }

    return (
        <div className="flex flex-col space-y-16 md:space-y-6   ">
            <div className="mt-16 flex flex-col w-fit items-center space-y-2">
                <h1 className="text-black text-xl font-bold">{data.image.name}</h1>
                <div className="flex flex-col items-center space-y-5">
                    <div className={`relative w-28 h-28 bg-gray-400 flex items-center justify-center rounded-full`}>
                        <img ref={img} className="absolute z-0 w-28 h-28 top-0 right-0 rounded-full" src={imgUrl} alt="" />
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-bold cursor-pointer text-sm text-black">{data.image.input}</p>
                        <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                // Do something with the response
                                // console.log("Files: ", res);
                                const file = res[0].url
                                updateImage(file)
                                setImgUrl(file)
                                ok_alert("Unggah Berhasil", "Upload Completed");
                            }}
                            onUploadError={(error: Error) => {
                                // Do something with the error.
                                alert(`ERROR! ${error.message}`);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex flex-col space-y-6">
                        {
                            dataRequired.map((item, index) => (
                                <Input
                                    occupation={false}
                                    name={item.name}
                                    index={index}
                                    data={item.value}
                                    required={true} />
                            ))
                        }
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    {
                        dataNormal.map((item, index) => (
                            < Input
                                occupation={false}
                                name={item.name}
                                index={index + 4}
                                data={item.value}
                                required={false} />
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
                    onClick={e => { router.push("/"); customerLogOut() }}>
                    {logout_comment}
                </button>
            </div>
        </div>
    )
}