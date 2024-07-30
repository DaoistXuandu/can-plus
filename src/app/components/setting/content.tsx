import { button_comment, data } from "@/app/lib/content/setting";
import Input from "./input";

export default function Content() {
    return (
        <div className="flex flex-col space-y-20">
            <div className="mt-16 flex flex-row space-x-10">
                <div className="w-1/2 flex flex-col space-y-6">
                    {
                        data.required.map(item => (
                            <Input name={item.name} data={item.value} required={true} />
                        ))
                    }
                </div>
                <div className="w-1/2 flex flex-col space-y-6">
                    {
                        data.other.map(item => (
                            <Input name={item.name} data={item.value} required={false} />
                        ))
                    }
                </div>
            </div>
            <button style={{ backgroundColor: "#F4D03F" }} className="flex justify-center p-4 pl-20 pr-20 bg-yellow-300 w-fit rounded-full font-bold text-white text-lg">
                {button_comment}
            </button>
        </div>
    )
}