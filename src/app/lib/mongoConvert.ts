import { Types } from "mongoose";
export default function strToObj(value: string) {
    return Types.ObjectId.createFromHexString(value)
}