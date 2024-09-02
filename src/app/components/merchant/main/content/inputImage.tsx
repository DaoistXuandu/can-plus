import Image from "@/app/lib/icon/image";
import { UploadButton } from "@/utils/uploadthing";

export default function InputImage() {
    return (
        <div className="flex flex-start">
            {/* <div className="w-1/2 p-2 pl-4 pr-4 text-lg bg-yellow-300 rounded-lg text-white placeholder-white relative cursor-pointer flex flex-row space-x-3 items-center"> */}
            {/* <Image size={25} stroke={1.5} />
            <h1>Pilih Gambar</h1> */}
            <UploadButton
                className="w-full lg:w-3/4 h-fit"
                appearance={{
                    button: {
                        background: "rgb(253 224 71)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                        color: "#fff"
                    },
                    allowedContent: {
                        display: "none"
                    }
                }}
                content={{
                    button:
                        <div className="h-fit flex flex-row space-x-4 pl-4 pr-4 items-center">
                            <Image size={25} stroke={2} />
                            <div className="text-lg">Gambar Makanan (opsional)</div>
                        </div>
                }} endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    // console.log("Files: ", res);
                    const file = res[0].url
                    // updateImage(file)
                    // setImgUrl(file)
                    // ok_alert("Unggah Berhasil", "Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </div>
    )
}