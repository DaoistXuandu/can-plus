import Card from "./card";

export default function Interface() {
    return (
        <div className="w-full h-full flex flex-row justify-end">
            <div className="w-full lg:w-5/12 p-5 h-full md:p-20 md:pt-10 md:pb-10 flex justify-center items-center">
                <Card />
            </div>
        </div>
    )
}