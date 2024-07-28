import { faq_issue, faq_title } from "@/lib/content/dashboard";
import { maven_pro } from "@/lib/font";
import DropDown from "@/lib/icon/dropdown";
import { useEffect, useState } from "react";

export default function FAQ() {
    const [question, setQuestion] = useState<boolean[]>(new Array(faq_issue.length).fill(false))

    function close_show(index: number) {
        const nextQuestion = question.map((issue, issue_index) => {
            if (issue_index == index) return question[index] != true
            else return issue
        })
        setQuestion(nextQuestion)
    }

    return (
        <div className={`${maven_pro.className}`}>
            <h1 style={{ color: "#DEC211" }} className="font-bold text-7xl">{faq_title}</h1>
            <div className="flex flex-col w-full mt-8 space-y-5">
                {
                    faq_issue.map((issue, index) => (
                        <div className="w-full border border-1 border-black p-5 pl-8 pr-8 rounded-2xl flex flex-row">
                            <div className="w-11/12 flex flex-col">
                                <div className="font-medium text-xl">{issue.question}</div>
                                <div className={`mt-3 text-lg ${question[index] ? "" : "hidden"}`}>{issue.answer}</div>
                            </div>
                            <div className="w-1/12 flex justify-end items-center"
                                onClick={(e => close_show(index))}
                            >
                                <div className={`${question[index] ? 'rotate-180' : ''}`}>
                                    <DropDown size={30} stroke={1.5} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >

    )
}