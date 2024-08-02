import { delivery } from "./cart"

const main = {
    title: "Riwayat Pembelian",
}

const status = [
    {
        comment: "Menunggu Konfirmasi",
        color: "#b7950b"
    },
    {
        comment: "Sedang Dibuat",
        color: "#2874A6"
    },
    {
        comment: "Sedang Diantar",
        color: "#1abc9c"
    },
    {
        comment: "Selesai",
        color: "#1e8449"
    },
    {
        comment: "Sudah Diambil",
        color: "#1e8449"
    }
]

const status_comment = {
    main: "Sudah Diambil??",
    secondary: "Status pesanan akan otomatis menjadi terambil apabila telah lebih dari 30 menit!",
    section: [
        "Total",
        "Waktu",
        "Status",
        "Pesanan",
        "Catatan",
        "Biaya Ongkir",
        "Biaya Aplikasi"
    ]
}


const order = [
    {
        name: "Depot Mas Rudi",
        time: "5 Menit yang lalu",
        image: "/image/user/background_stall.png",
        order: [
            {
                name: "Ayam Goreng",
                price: "10.000",
                quantity: 20,
                note: "Ngga pake lalapan"
            },
            {
                name: "Ayam Goreng",
                price: "56.000",
                quantity: 1,
                note: ""
            },
        ],
        total: "256.0000",
        delivery: "5.000",
        app: "2.000",
        status: 0
    },
    {
        name: "Nasi Goreng Kanda",
        time: "10 Menit yang lalu",
        image: "/image/user/background_stall.png",
        order: [
            {
                name: "Nasi Goreng",
                price: "15.000",
                quantity: 1,
                note: "Pedes"
            },
            {
                name: "Bebek Goreng",
                price: "15.000",
                quantity: 1,
                note: "Pedes"
            },
        ],
        total: "30.0000",
        delivery: "0.000",
        app: "2.000",
        status: 1
    },
    {
        name: "Nasi Goreng Kanda",
        time: "1 jam yang lalu",
        image: "/image/user/background_stall.png",
        order: [
            {
                name: "Nasi Goreng",
                price: "15.000",
                quantity: 1,
                note: "agsblcslkjalkashlkcnlknsalnlsknldiafl;kan;ljal/kjf"
            },
            {
                name: "Bebek Goreng",
                price: "15.000",
                quantity: 1,
                note: "Pedes"
            },
        ],
        total: "30.0000",
        delivery: "5.000",
        app: "2.000",
        status: 2
    },
    {
        name: "Nasi Goreng Kanda",
        time: "30 Menit yang lalu",
        image: "/image/user/background_stall.png",
        order: [
            {
                name: "Nasi Goreng",
                price: "15.000",
                quantity: 1,
                note: "agsblcslkjalkashlkcnlknsalnlsknldiafl;kan;ljal/kjf"
            },
            {
                name: "Bebek Goreng",
                price: "15.000",
                quantity: 1,
                note: "Pedes"
            },
        ],
        total: "30.0000",
        delivery: "5.000",
        app: "2.000",
        status: 3
    },
    {
        name: "Nasi Goreng Kanda",
        time: "30 Menit yang lalu",
        image: "/image/user/background_stall.png",
        order: [
            {
                name: "Nasi Goreng",
                price: "15.000",
                quantity: 1,
                note: "agsblcslkjalkashlkcnlknsalnlsknldiafl;kan;ljal/kjf"
            },
            {
                name: "Bebek Goreng",
                price: "15.000",
                quantity: 1,
                note: "Pedes"
            },
        ],
        total: "30.0000",
        delivery: "0",
        app: "2.000",
        status: 4
    }
]

export { main, order, status, status_comment }