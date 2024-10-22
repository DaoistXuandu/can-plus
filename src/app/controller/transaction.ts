import { link, stat } from "fs"
import { data } from "../lib/content/setting"

async function transactionCreate(total: number, status: number, time: string, delivery: boolean) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/transaction/transaction-create`, {
        method: 'POST',
        body: JSON.stringify({
            total: total,
            status: status,
            time: time,
            delivery: delivery
        }),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)

    return result.transaction
}

async function transactionUpdate(transactionId: string, link: string, midtransId: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/transaction/transaction-update`, {
        method: 'PATCH',
        body: JSON.stringify({
            transactionId: transactionId,
            link: link,
            midtransId: midtransId
        }),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)
        .catch(data => data)
    return result
}


async function transactionUpdateDelivery(transactionId: string, delivery: boolean) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/transaction/transaction-update-delivery`, {
        method: 'PATCH',
        body: JSON.stringify({
            transactionId: transactionId,
            delivery: delivery
        }),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)
        .catch(data => data)
    return result
}


async function transactionUpdateStatus(transactionId: string, status: number) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/transaction/transaction-update-status`, {
        method: 'PATCH',
        body: JSON.stringify({
            transactionId: transactionId,
            status: status
        }),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)
        .catch(data => data)
    return result
}

async function transactionGetAll() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/transaction/transaction-get-all`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)

    return result
}

async function transactionGet(transactionId: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/transaction/transaction-get`, {
        method: 'PATCH',
        body: JSON.stringify({
            transactionId: transactionId
        }),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)

    return result
}

async function transactionDelete(transactionId: string) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/transaction/transaction-delete`, {
        method: 'DELETE',
        body: JSON.stringify({
            transactionId: transactionId
        }),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)

    return result
}

export { transactionCreate, transactionGetAll, transactionGet, transactionUpdateStatus, transactionUpdate, transactionUpdateDelivery, transactionDelete }