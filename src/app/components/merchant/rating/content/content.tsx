import { stall } from "@/app/lib/content/customer/restaurant";
import { useState } from "react";
import { navbar, review } from "@/app/lib/content/customer/rating";
import Review from "./review";
import Plus from "@/app/lib/icon/add";
import Star from "@/app/lib/icon/star";

export default function Content() {
    const [star, setStar] = useState(0)
    const [enableAdd, setEnableAdd] = useState(false)
    const data = [1, 2, 3, 4, 5]

    return (
        <div>
            <div className="h-60 md:h-52"></div>
            <div>
                <form className="text-black pl-7 pr-7 mt-16 md:mt-10 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-10 pb-16">
                    {review.map((item, index) => (
                        <div>
                            <Review reviewIndex={index} />
                        </div>
                    ))}
                    {/* <div className="relative cursor-pointer h-fit w-fit">
                        <div className="flex flex-row items-center space-x-4 font-medium text-lg">
                            <div className={`bg-white shadow-lg p-2 rounded-full w-fit h-fit ${enableAdd ? 'rotate-45' : ''} transition-all duration-700`} onClick={e => setEnableAdd(enableAdd != true)}>
                                <Plus stroke={2} size={40} />
                            </div>
                            <h1>{navbar.main[3]}</h1>
                        </div>
                        <div style={{ marginLeft: (enableAdd ? '-60%' : '-400%') }} className={`absolute transition-all duration-700 left-full bottom-0 bg-white shadow-lg rounded-lg h-fit w-fit p-5 flex flex-col space-y-3`}>
                            <div className="flex flex-col space-y-2">
                                <label className="text-xl font-bold" htmlFor="rating">{navbar.main[0]}</label>
                                <div className="flex flex-row space-x-1 transition-all duration-300">
                                    {
                                        data.map(item => (
                                            <div onClick={e => setStar(item)} className={`cursor-pointer ${item <= star ? 'text-yellow-300 transition-all duration-300' : ''}`}>
                                                <Star size={25} stroke={2} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-xl font-bold" htmlFor="review">{navbar.main[1]}</label>
                                <textarea name="review" id="review" className="resize-none border border-1 border-yellow-300 w-64 h-28 p-2"></textarea>
                            </div>
                            <div className="w-full flex justify-center pt-8">
                                <button className="w-full h-fit p-2 bg-yellow-500 rounded-xl hover:scale-90 text-white font-bold">
                                    {navbar.main[2]}
                                </button>
                            </div>
                        </div>
                    </div> */}
                </form>
            </div >
        </div >
    )
}