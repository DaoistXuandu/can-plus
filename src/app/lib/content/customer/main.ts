import "./canteen"
import "./restaurant"
import { canteen } from "./canteen"
import { stall } from "./restaurant"
// navbar
const navbar_logo_link = "/image/CanPlus_Main_Logo.png"
const navbar_search_comment = "Cari Tempat Makan"
const navbar_option = {
    delivery: "Antar Makanan",
    cart: "Keranjang Makanan",
    profile: "Profil"
}

// suggestion
const suggestion = [
    "Kantin Balgebun Fakultas Ilmu Komputer",
    "Universitas Padjajaran",
    "Depot Mas Aji",
    "Ayam Goreng",
    "Kantin Melati",
    "Kambing Guling"
]

// main comment
const main_comment = [
    "Di sekitar muuuuu!!!",
    "Tempat Makan di Kantin Balgebun",
    "Kantin di sekitar Universitas Indonesia",
    "Mencari Depot Aji Terenaaaak!!!!",
    "Tempat Makan Dengan Menu Mie Ayam"
]

// main data show beginning

const main_area = {
    type: 0,
    url: canteen[0].url,
    address: canteen[0].address,
    name: canteen[0].name
}

const main_stall = {
    type: 1,
    url: stall[0].image,
    address: stall[0].location,
    name: stall[0].name

}

const main_content = [
    [
        main_area, main_stall,
        main_stall,
        main_area,
        main_stall,
        main_stall,
        main_stall,
        main_area,
        main_area,
        main_area,
        main_stall,
        main_stall,
        main_stall,
    ],
    [
        main_stall,
        main_stall,
        main_stall,
        main_stall,
        main_stall,
        main_stall,
        main_stall,
        main_stall,
        main_stall,
        main_stall,
        main_stall
    ]
]


export { navbar_logo_link, navbar_search_comment, navbar_option, suggestion, main_comment, main_content }