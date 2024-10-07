import { stall } from "@/app/lib/content/customer/restaurant";
import Section from "./section";
import { useEffect, useState } from "react";
import { sectionGetAll } from "@/app/controller/section";

export default function Content({ id }: { id: string }) {
    const [data, setData] = useState<{ _id: string, name: string }[]>([{ _id: "", name: "" }])
    const [load, setLoad] = useState(null)

    async function getData() {
        const result = await sectionGetAll(id)
        setData(result)
    }

    useEffect(() => {
        getData()
    }, [load])


    return (
        <div>
            {/* <div className="h-96 md:h-80"></div> */}
            <div className="text-black pl-5 pr-5 mt-5 md:mt-0 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-8 pb-10">
                {

                    data ?
                        data.map((section) => (
                            <div>
                                <Section name={section.name} sectionId={section._id} merchantId={id} />
                            </div>
                        ))
                        :
                        "Tidak ada data"

                }
            </div>
        </div>
    )
}