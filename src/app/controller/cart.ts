async function cartCreate() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/cart/cart-create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

export { cartCreate }