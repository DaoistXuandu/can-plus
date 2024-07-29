import { review_title, review_user } from "@/lib/content/dashboard";
import { maven_pro } from "@/lib/font";
import LeftArrow from "@/lib/icon/left_arrow";
import RightArrow from "@/lib/icon/right_arrow";
import { useEffect, useState } from "react";

export default function Review() {
    const [reviewIndex, setReviewIndex] = useState(2)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <div className={`w-full ${maven_pro.className} pl-5 pr-5 flex flex-col`}>
            <h1 style={{ color: "#DEC211" }} className="font-bold text-5xl text-left md:text-7xl md:text-center">{review_title}</h1>

            <div className="flex flex-col md:flex-row w-full bg-white rounded-3xl p-8 mt-10 shadow-md">
                <div className="md:w-4/12 flex flex-row md:flex-col">
                    <div style={{ width: `${width < 760 ? 50 : 80}px`, height: `${width < 760 ? 50 : 80}px` }} className="bg-transparent">
                        <img src={`${review_user[reviewIndex].image}`} className="rounded-full" alt="" />
                    </div>
                    <div className="md:mt-5 md:pr-10 pl-3 flex md:flex-col items-center md:items-start md:pl-0">
                        <div className="font-bold text-md md:text-3xl">{review_user[reviewIndex].name}</div>
                        <div className="hidden md:flex text-2xl">{review_user[reviewIndex].place}</div>
                        <div className="hidden md:flex w-full text-sm truncate text-ellipsis hover:text-clip hover:whitespace-normal">{review_user[reviewIndex].address}</div>
                    </div>
                </div>
                <div className="md:w-8/12 items-center flex mt-5 md:mt-0">
                    <div className="text-md md:text-xl h-40 md:h-48 overflow-hidden scroll-auto text-ellipsis">
                        {review_user[reviewIndex].comment}
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-5 md:space-x-5 w-full">
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