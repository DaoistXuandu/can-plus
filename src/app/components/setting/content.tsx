import { button_comment, data, logout_comment } from "@/app/lib/content/setting";
import Input from "./input";
import { useRouter } from "next/navigation";

export default function Content() {
    const router = useRouter()
    return (
        <div className="flex flex-col space-y-16 md:space-y-20">
            <div className="mt-16 flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    {
                        data.required.map(item => (
                            <Input name={item.name} data={item.value} required={true} />
                        ))
                    }
                </div>
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    {
                        data.other.map(item => (
                            <Input name={item.name} data={item.value} required={false} />
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
                    onClick={e => router.push("/")}
                >
                    {logout_comment}
                </button>
            </div>
        </div>
    )
}