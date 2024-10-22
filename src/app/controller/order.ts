
async function orderCreate(menuId: string, quantity: number) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-create`, {
        method: 'POST',
        body: JSON.stringify({
            menuId: menuId,
            quantity: quantity
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

async function orderUpdate(id: string, quantity: number, comment: string | null) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-update`, {
        method: 'PATCH',
        body: JSON.stringify({
            menuId: id,
            quantity: quantity,
            comment: comment
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

async function orderGetAll() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-get-all`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.order
}

async function orderGetQuantity(menuId: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-get-quantity`, {
        method: 'PATCH',
        body: JSON.stringify({
            menuId: menuId
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.quantity
}

async function orderGetComment(menuId: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-get-comment`, {
        method: 'PATCH',
        body: JSON.stringify({
            menuId: menuId
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.comment
}

async function orderDeleteMenu(customerId: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-delete-menu`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

async function orderUpdateQuantity(orderId: string, value: number) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-update-quantity`, {
        method: 'PATCH',
        body: JSON.stringify({
            orderId: orderId,
            quantity: value
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.quantity
}

async function orderUpdateComment(orderId: string, comment: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-update-comment`, {
        method: 'PATCH',
        body: JSON.stringify({
            orderId: orderId,
            comment: comment
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.comment
}

async function orderChangeCustomer(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-change-customer`, {
        method: 'PATCH',
        body: JSON.stringify({
            transactionId: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result
}

async function orderGetAllTransaction(id: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/order/order-get-all-transaction`, {
        method: 'PATCH',
        body: JSON.stringify({
            transactionId: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
    return result.order
}

export {
    orderCreate, orderUpdate,
    orderGetAll, orderGetComment,
    orderGetQuantity, orderDeleteMenu,
    orderUpdateQuantity, orderUpdateComment,
    orderChangeCustomer, orderGetAllTransaction
}