import { submit } from "@/app/lib/content/signUp";

export default function Button() {
    return (
        <button className=" w-full mt-16 flex flex-col space-y-2">
            <h1 style={{ backgroundColor: "#F1C40F" }} className="w-full text-center font-bold text-2xl p-3 rounded-xl">{submit.button}</h1>
            <div className="text-sm flex flex-row space-x-1">
                <p>
                    {submit.login.comment.normal}
                </p>
                <a style={{ color: "#F1C40F" }} href={submit.login.url} className="font-bold">
                    {submit.login.comment.bold}
                </a>
            </div>
        </button >
    )
}