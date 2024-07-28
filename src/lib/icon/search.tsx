import { styleText } from "util"

export default function SearchIcon({ width, height, stroke = 1.5 }: { width: number, height: number, stroke: number }) {
    return (
        <svg style={{ width: width + "px", height: height + "px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={stroke} stroke="currentColor" className={`size-6`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    )
}