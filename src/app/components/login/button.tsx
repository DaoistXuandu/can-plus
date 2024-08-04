import { submit } from "@/app/lib/content/login";

export default function Button({ disabled }: { disabled: boolean }) {
    return (
        <div className="w-full mt-16 flex flex-col space-y-2">
            <button
                disabled={disabled}
                className={`disabled:scale-90 disabled:bg-yellow-200 hover:scale-90 w-full text-center bg-yellow-500 font-bold text-2xl p-3 rounded-xl`}>{submit.button}</button>
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