import { review } from "@/app/lib/content/customer/rating";
import Star from "@/app/lib/icon/star";

export default function Review({ reviewIndex }: { reviewIndex: number }) {
    return (
        <div className="flex flex-col md:flex-row items-start space-y-2 md:items-center">
            <div className="w-4/12 md:w-1/12 flex-end">
                <img src={review[reviewIndex].image} className="w-3/4 aspect-ratio rounded-full" alt="" />
            </div>
            <div className="w-11/12">
                <h1 className="font-bold text-3xl">{review[reviewIndex].name}</h1>
                <div className="flex flex-row items-center space-x-2">
                    <div className="text-yellow-300">
                        <Star size={20} stroke={2} />
                    </div>
                    <p className="font-bold">
                        {review[reviewIndex].rating}/5
                    </p>
                </div>
                <p className="text-md">{review[reviewIndex].comment}</p>
            </div >
        </div >
    )
}