import { submit } from "@/app/lib/content/signUp";

export default function Button() {
    return (
        <div className=" w-full mt-16 flex flex-col space-y-2">
            <button style={{ backgroundColor: "#F1C40F" }} className="hover:scale-90 w-full text-center font-bold text-2xl p-3 rounded-xl">{submit.button}</button>
            <div className="text-sm flex flex-row space-x-1">
                <p>
                    {submit.login.comment.normal}
                </p>
                <a style={{ color: "#F1C40F" }} href={submit.login.url} className="font-bold">
                    {submit.login.comment.bold}
                </a>
            </div>
        </div >
    )
}