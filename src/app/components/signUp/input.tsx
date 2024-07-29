export default function Input({ name, setValue, type }: { name: string, setValue: (value: string) => void, type: string }) {
    return (
        <input style={{ backgroundColor: "#9A7D0A" }}
            className="
                w-full 
                h-fit 
                p-4 pl-5 pr-5 
                rounded-lg 
                placeholder:text-white 
                placeholder:opacity-50
                focus:outline-none
                focus:ring-inset
                focus:ring-1
                focus:ring-yellow-500
                "
            type={type}
            placeholder={name}
            onChange={e => setValue(e.target.value)} />
    )
}