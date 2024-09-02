import { useState } from "react";
import Change from "./change";

export default function ChangeLink({ name, currentEdit, dataIndex, change }: { name: string, currentEdit: number, dataIndex: number, change: (value: number) => void }) {
    return (
        <div>
            <div className="underscore" onClick={e => (dataIndex == currentEdit ? change(-1) : change(dataIndex))}>
                <h1 className="underline">
                    {name}
                </h1>
            </div>
            <div className={`${dataIndex != currentEdit ? 'hidden' : ''}`}>
                <Change name={name} currentEdit={currentEdit} change={change} dataIndex={dataIndex} />
            </div>
        </div>
    )
}