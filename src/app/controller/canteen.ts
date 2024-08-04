import mongoose from "mongoose"

async function canteenGetByKeyword({
    name
}: { name: string }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/canteen/canteen-get-by-keyword`, {
        method: "PATCH",
        body: JSON.stringify({
            name: name
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.canteen)
    return result
}

async function canteenGetById(id: mongoose.Types.ObjectId) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/canteen/canteen-get-by-id`, {
        method: "PATCH",
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.canteen)
    return result
}

export { canteenGetById, canteenGetByKeyword }