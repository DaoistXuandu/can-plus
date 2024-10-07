
async function paymentGet() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/payment/payment-get-total`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)

    return result
}

// async function paymentSet(transactionId: string, total: number, customerName: string,) {
//     const midtransClient = require('midtrans-client');
//     let snap = new midtransClient.Snap({
//         isProduction: false,
//         serverKey: process.env.MIDTRANS_SERVER
//     });

//     let parameter = {
//         "transaction_details": {
//             "order_id": transactionId,
//             "gross_amount": 10000
//         },
//         "credit_card": {
//             "secure": true
//         },
//         "customer_details": {
//             "first_name": customerName,
//             "last_name": "pratama",
//             "email": "budi.pra@example.com",
//             "phone": "08111222333"
//         }
//     };

//     snap.createTransaction(parameter)
//         .then((transaction: any) => {
//             // transaction token
//             let transactionToken = transaction.token;
//             console.log('transactionToken:', transactionToken);
//         })
// }

async function paymentSet() {
    const env = process.env.MIDTRANS_SERVER
    if (env) {
        const result = await fetch(`https://app.sandbox.midtrans.com/snap/v1/transactions`, {
            method: 'POST',
            headers: {
                'Authorization': env,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "transaction_details": {
                    "order_id": "2345678",
                    "gross_amount": 10000
                },
                "credit_card": {
                    "secure": true
                },
                // "customer_details": {
                //     "first_name": "budi",
                //     "last_name": "pratama",
                //     "email": "budi.pra@example.com",
                //     "phone": "08111222333"
                // }
            })
        })
            .then(response => response.json())
            .then(data => data)

        return result
    }
    else {
        console.log("access")
        return
    }
}

export { paymentGet, paymentSet }