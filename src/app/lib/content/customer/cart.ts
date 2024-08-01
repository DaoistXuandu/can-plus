import { comment } from "postcss"
import { button_comment } from "../setting"

const main = {
    title: "Keranjang",
    section: "Pesanan",
    note: "Catatan",
    note_edit: "Selesai",
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
    price: "25.000",
    detail: {
        food: {
            comment: "Total Makanan",
            price: "23.000"
        },
        delivery: {
            comment: "Biaya Ongkir",
            price: "5.000"
        },
        apps: {
            comment: "Biaya Aplikasi",
            price: "2.000"
        },
    },
    url: "/image/GoPay.png",
    button_comment: "GoPay"

}

export { main, delivery, bill }