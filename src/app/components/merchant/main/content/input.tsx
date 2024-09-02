export default function Input({ name }: { name: string }) {
    return (
        <input
            className="w-full p-2 pl-4 pr-4 text-lg bg-yellow-300 rounded-lg text-white placeholder-white"
            placeholder={name + "*"}
            type="text"
        />
    )
}