import { suggestion } from "@/app/lib/content/customer/main";
import SearchBar from "./search/searchbar";
import SearchIcon from "@/app/lib/icon/search";

export default function Suggestion() {
    return (
        <div className="mt-2 p-5 select-nones text-black flex flex-row space-x-5 w-full overflow-x-auto">
            {
                suggestion.map(suggest => (
                    <div className="bg-white cursor-pointer flex flex-row items-center rounded-full p-4 pl-6 pr-6 space-x-4 min-w-fit max-w-56 text-center whitespace-nowrap text-ellipsis overflow-hidden">
                        <SearchIcon width={20} height={20} stroke={2} />
                        <p>{suggest}</p>
                    </div>
                ))
            }
        </div>
    )
}