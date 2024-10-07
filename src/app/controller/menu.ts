async function menuGetAll(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/menu/menu-get-all`, {
        method: 'PATCH',
        body: JSON.stringify({
            sectionId: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result.menu
}

async function menuGet(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/menu/menu-get`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.menu)

    return result
}

export { menuGetAll, menuGet }