async function sectionGetAll(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/section/section-get-all`, {
        method: 'PATCH',
        body: JSON.stringify({
            merchantId: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result.section
}

async function sectionGet(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/section/section-get`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result.section
}

export { sectionGetAll, sectionGet }