import { review_title, review_user } from "@/lib/content/dashboard";
import { maven_pro } from "@/lib/font";
import LeftArrow from "@/lib/icon/left_arrow";
import RightArrow from "@/lib/icon/right_arrow";
import { useState } from "react";

export default function Review() {
    const [reviewIndex, setReviewIndex] = useState(2)

    return (
        <div className={`w-full ${maven_pro.className}`}>
            <h1 style={{ color: "#DEC211" }} className="font-bold text-7xl text-center">{review_title}</h1>

            <div className="flex flex-row w-full bg-white rounded-3xl p-8 mt-10 shadow-md">
                <div className="w-4/12 flex flex-col">
                    <div style={{ width: "80px", height: "80px" }} className="bg-transparent">
                        <img src={`${review_user[reviewIndex].image}`} className="rounded-full" alt="" />
                    </div>
                    <div className="mt-5">
                        <div className="font-bold text-3xl">{review_user[reviewIndex].name}</div>
                        <div className="text-2xl">{review_user[reviewIndex].place}</div>
                        <div className="w-full pr-20 text-sm truncate hover:text-clip hover:whitespace-normal">{review_user[reviewIndex].address}</div>
                    </div>
                </div>
                <div className="w-8/12 items-center flex">
                    <div className="text-xl h-48 overflow-hidden text-ellipsis">
                        {review_user[reviewIndex].comment}
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-5 space-x-5">
                <div className="w-fit h-fit p-4 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110" onClick={e => (setReviewIndex((reviewIndex + review_user.length - 1) % review_user.length))}>
                    <LeftArrow size={30} stroke={2} />
                </div>
                <div className="w-fit h-fit p-4 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110" onClick={e => (setReviewIndex((reviewIndex + review_user.length + 1) % review_user.length))}>
                    <RightArrow size={30} stroke={2} />
                </div>
            </div>
        </div>
    )

}