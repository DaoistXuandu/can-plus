import { error_alert, ok_alert } from "@/app/lib/alert";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import Minus from "@/app/lib/icon/minus";
import Pen from "@/app/lib/icon/pen";
import { useEffect, useState } from "react";

export default function Menu({
    name,
    price,
    image,
    quantity }:
    { name: string, price: string, image: string, quantity: (value: number) => void }
) {
    const [edit, setEdit] = useState(false)
    const [menuName, setMenuName] = useState(name)
    const [menuPrice, setMenuPrice] = useState(price.split(".").join(""))
    const [invalidPrice, setInvalidPrice] = useState(false)
    const [changeImage, setChangeImage] = useState(false)

    useEffect(() => {
        let status = false;
        for (let i = 0; i < menuPrice.length; i++) {
            if (menuPrice[i] < '0' || menuPrice[i] > '9')
                status = true
        }

        setInvalidPrice(status)

    }, [menuPrice])

    function handleEdit() {
        if (invalidPrice) {
            error_alert("Harga harus merupakan bilangan")
            return
        }
        setEdit(edit != true)
    }

    async function handleDelete() {

    }

    return (
        <div className="relative flex flex-col md:flex-row md:items-center w-full h-full md:space-x-5">
            <div className="w-10/12 md:w-11/12 flex flex-row h-fit space-x-5 select-none">
                <div className="flex flex-col">
                    <div className="relative" onClick={e => setChangeImage(changeImage != true)}>
                        <div className={`w-full h-full absolute bg-gray-200 rounded-xl bg-opacity-50 font-bold font-xs flex items-center text-center justify-center cursor-pointer ${edit ? '' : 'hidden'} `}>
                            Ubah Gambar
                        </div>
                        <img src={image} className="rounded-xl h-16 w-16 min-h-16 min-w-16 md:min-h-16 md:min-w-16 md:h-16 md:w-16" alt="" />
                    </div>
                    <div className={`absolute top-full z-50 flex items-center justify-center text-center ${!changeImage || !edit ? 'hidden' : ''}`} >
                        <UploadDropzone
                            className={`bg-white shadow-lg`}
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                // Do something with the response
                                console.log("Files: ", res);
                                alert("Upload Completed");
                            }}
                            onUploadError={(error: Error) => {
                                alert(`ERROR! ${error.message}`);
                            }}
                            onUploadBegin={(name) => {
                                // Do something once upload begins
                                console.log("Uploading: ", name);
                            }}
                            onDrop={(acceptedFiles) => {
                                // Do something with the accepted files
                                console.log("Accepted files: ", acceptedFiles);
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full overflow-x-auto">
                    <h1 className={`w-full font-medium text-lg md:text-2xl whitespace-nowrap ${edit ? 'hidden' : ''}`}>{menuName}</h1>
                    <input
                        type="text"
                        className={`w-full font-medium text-lg md:text-2xl whitespace-nowrap ring-2 ring-inset ring-yellow-300 rounded-sm ${edit ? '' : 'hidden'}`}
                        value={menuName}
                        onChange={e => setMenuName(e.target.value)}
                    />
                    <p className={`font-light text-sm md:text-lg ${edit ? 'hidden' : ''}`}>Rp {menuPrice}</p>
                    <div className={`${edit ? '' : 'hidden'} flex flex-row space-x-2 items-start w-full`}>
                        <p className={`font-light text-sm md:text-lg`}>Rp</p>
                        <div>
                            <input
                                type="text"
                                className={`ring-2 ring-inset ring-${invalidPrice ? 'red-300' : 'yellow-300'} rounded-sm pl-2 font-light text-sm md:text-lg`}
                                value={menuPrice}
                                onChange={e => setMenuPrice(e.target.value)}
                            />
                            <h1 className={`text-red-500 text-xs ${invalidPrice ? '' : 'hidden'}`}>Harga hanya boleh terdiri dari angka!</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full mt-3 md:mt-0 space-x-2 md:space-x-0 md:w-1/12 flex md:space-x-5 items-center md:justify-end cursor-pointer">
                <div onClick={handleEdit}>
                    <div className={`${edit ? 'hidden' : ''}`}>
                        <Pen size={20} stroke={2} />
                    </div>
                    <div className={`${edit ? '' : 'hidden'}`}>
                        <button className="ring ring-1 p-1 ring-black font-bold hover:bg-black hover:text-white rounded-md">Ubah</button>
                    </div>
                </div>
                <div onClick={handleDelete}>
                    <Minus size={20} stroke={2} />
                </div>
            </div>
        </div >
    )
}