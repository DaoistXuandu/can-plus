import { sign } from "crypto"
import { url } from "inspector"
import { title } from "process"
// navbar
const navbar_auth = {
    login: {
        comment: "Masuk",
        url: "/pages/login"
    },
    signup: {
        comment: "Daftar",
        url: "/pages/signUp"
    }
}

const navbar_link = {
    location: {
        comment: "Lokasi",
        url: ""
    },
    review: {
        comment: "Ulasan",
        url: ""
    },
    faq: {
        comment: "FAQ",
        url: ""
    },
}


// intro
const intro_header = "CanPlus"
const intro_body = "Canplus merupakan platform digitalisasi kantin yang memudahkan transaksi tanpa uang tunai di lingkungan sekolah dan kampus. Platform ini memungkinkan siswa dan mahasiswa melakukan pemesanan dan pembayaran makanan secara online, sehingga mempercepat proses antrian dan efisiensi kantin."
const intro_button = "Ikuti Lebih Lanjut!"
const intro_button_url = "/pages/customer/main"

// launching
const launching_header = "Peluncuran Pertama CanPlus"

// location
const location_header = "Lokasi"
const location_body = "CanPlus telah bekerjasama dengan beberapa kantin dan tenant yang tersebar di seluruh Jabodetabek! Temukan kantin kesukaan anda"
const location_icon_phone = "Hubungi"
const location_icon_search = "Cari Terdekat"

//review
const review_title = "Ulasan"
const review_user = [{
    name: "Sarawindah Mujadah",
    image: "./image/user/profile_1.png",
    place: "Nama Kantin",
    address: "Kantin Fakultas Psikologi Universitas Padjajaran",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. Nullam fermentum leo vitae porta pretium. Aenean egestas magna metus, in mollis enim suscipit eu. Nunc lacinia vulputate aliquam. Vivamus semper nunc ac sodales facilisis. Donec rhoncus in ipsum quis viverra. Maecenas ut sodales enim. Phasellus in dolor massa. Sed urna augue, porttitor nec fringilla vel, condimentum in est. "
}, {
    name: "Anwar Ibrahim",
    image: "./image/user/profile_2.png",
    place: "Depot Sunawar",
    address: "Kantin Terakota Sabilalang, Fakultas Ilmu Sosial Universitas Negeri Sebalas Maret",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. Nullam fermentum leo vitae porta pretium. Aenean egestas magna metus, in mollis enim suscipit eu. Nunc lacinia vulputate aliquam. Vivamus semper nunc ac sodales facilisis. Donec rhoncus in ipsum quis viverra. Maecenas ut sodales enim. Phasellus in dolor massa."
}, {
    name: "Saleh Sunarwan Gunawan",
    image: "./image/user/profile_3.png",
    place: "Depot Ayam",
    address: "Kantin Balgebun, Fakultas Ilmu Komputer Universitas Indonesia",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. Nullam fermentum leo vitae porta pretium. Aenean egestas magna metus, in mollis enim suscipit eu. Nunc lacinia vulputate aliquam. Vivamus semper nunc ac sodales facilisis. Donec rhoncus in ipsum quis viverra. Maecenas ut sodales enim. Phasellus in dolor massa. Sed urna augue, porttitor nec fringilla vel, condimentum in est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. Nullam fermentum leo vitae porta pretium. Aenean egestas magna metus, in mollis enim suscipit eu. Nunc lacinia vulputate aliquam. Vivamus semper nunc ac sodales facilisis. Donec rhoncus in ipsum quis viverra. Maecenas ut sodales enim. Phasellus in dolor massa. Sed urna augue, porttitor nec fringilla vel, condimentum in est."
}]

// FAQ
const faq_title = "FAQ"
const faq_issue = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. ",
        answer: "Vivamus ullamcorper magna mi, vitae tempor lorem varius quis. Nullam scelerisque lorem sit amet odio varius, in ornare augue hendrerit. Fusce elementum sem nec velit fringilla aliquam."
    },
    {
        question: "dolor sit amet, consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. ",
        answer: "This answer"
    },
    {
        question: " consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. ",
        answer: " consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis.consectetur adipiscing elit. Nulla non vehicula ipsum. Sed viverra augue ut facilisis venenatis. "
    }
]

// footer
const footer_address = {
    title: "Alamat",
    body: "Asrama Mahasiswa UI, RW.3, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Jawa Barat 16424"
}

const footer_hotline = {
    title: "Hotline",
    whatsaap: "wa.me/6285157860551",
    line: "CanPlus"
}

const footer_social = {
    title: "Media Sosial",
    twitter: "CanPlus",
    instagram: "CanPlus",
    youtube: "CanPlus",
}




export {
    navbar_auth,
    navbar_link,
    footer_address,
    footer_hotline,
    footer_social,
    faq_title,
    faq_issue,
    review_title,
    review_user,
    intro_header,
    intro_body,
    intro_button,
    intro_button_url,
    launching_header,
    location_header,
    location_body,
    location_icon_phone,
    location_icon_search
};