// import { connectToDB } from "@/app/lib/dbConnect";
// import { sessionGet } from "@/app/lib/session";
// import Canteen from "@/app/models/merchant/Canteen";
// import Merchant from "@/app/models/merchant/Merchant";
// import { NextRequest, NextResponse } from "next/server";

// export async function PATCH(request: NextRequest) {
//     try {
//         await connectToDB()
//         const id = await request.json()

//         if (merchant && canteen) {
//             const result = { merchant, canteen }

//             return NextResponse.json({
//                 message: "Succes to find suggestion",
//                 state: true,
//                 user: result
//             }, { status: 200 })
//         }
//         else throw "Fail to find merchant"
//     }
//     catch (err) {
//         return NextResponse.json({
//             message: "Err: " + err,
//             user: null,
//             state: false
//         }, { status: 400 })
//     }
// }