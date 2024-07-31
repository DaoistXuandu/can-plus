export default function Minus({ size, stroke }: { size: number, stroke: number }) {
    return (
        <svg style={{ width: size, height: size }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={stroke} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
    )
}