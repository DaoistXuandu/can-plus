
async function cookieGet({ name }:
    { name: string }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/cookie/cookie-get`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.cookie.value)

    return result
}

export { cookieGet }