import { button_comment } from "../setting"

const main = {
    title: "Pembayaran",
    button_comment: "Bayar!"
}

const delivery = {
    title: "Pengiriman",
    type: ["Ambil Sendiri", "Diantar"],
    location: "Lokasi",
    time: "Waktu Pengiriman",
    button_comment: "Konfirmasi"
}

const bill = {
    title: "Bayar",
    price: "25.0000",
    detail: {
        food: "23.000",
        delivery: "2.000"
    },
    button_comment: "GoPay"
}

export { main, delivery, bill }