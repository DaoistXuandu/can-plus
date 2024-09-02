import { stall } from "@/app/lib/content/customer/restaurant";
import Section from "./section";
import Menu from "./menu";
import { useState } from "react";
import Input from "./input";
import InputImage from "./inputImage";
import Plus from "@/app/lib/icon/add";

export default function Content() {
    const [add, setAdd] = useState(false)
    return (
        <div >
            {/* <div className="h-96 md:h-80"></div> */}
            <div className="text-black pl-5 pr-5 mt-5 md:mt-0 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 flex flex-col space-y-4 pb-10">
                <div className="flex flex-col space-y-3">
                    {
                        stall[0].menu.map((section, index) => (
                            <div>
                                <Section index={index} />
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button className={`flex flex-row space-x-3  items-center  p-3 w-fit pl-7 pr-7 bg-yellow-400 font-medium text-white ${add ? 'rounded-t-lg' : 'rounded-lg'} transition-all ease-in-out duration-700`} onClick={e => setAdd(add != true)}>
                        <div className={`transition transition-all duration-700 ease-in-out ${add ? 'rotate-45' : ''}`}>
                            <Plus size={25} stroke={3} />
                        </div>
                        <h1 className="hover:scale-95">
                            Tambah Jenis Makanan
                        </h1>
                    </button>
                    <form className={`${add ? 'pt-10 pb-10 pl-7 pr-7' : 'h-0 w-0'} transition-all ease-in-out duration-700 overflow-hidden bg-yellow-400 w-full lg:w-1/2 rounded-b-xl rounded-r-xl flex flex-col space-y-6`}>
                        <h1 className="font-bold text-4xl text-white">Tambah Jenis Menu Baru</h1>
                        <div className={`flex flex-col space-y-12 transition-all duration-700 ${add ? 'w-full' : 'w-0'}`}>
                            <div className="flex flex-col space-y-4">
                                <Input name="Nama Makanan" />
                            </div>
                            <button className="p-3 bg-yellow-700 rounded-xl text-white font-bold text-lg hover:scale-95">
                                <h1>
                                    Tambahkan Jenis Menu baru
                                </h1>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}