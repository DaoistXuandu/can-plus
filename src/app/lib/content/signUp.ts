const title = "Daftar"

const body = {
    username: "Buat Username",
    password: {
        init: "Buat Password",
        confirm: "Konfirmasi Password"
    },
    type: {
        title: "Daftar sebagai",
        first: "Pembeli",
        second: "Penjual"
    }
}

const submit = {
    button: "Daftar",
    login: {
        comment: {
            normal: "Sudah memiliki akun?",
            bold: "Masuk!"
        },
        url: "/pages/login"
    }
}


export { title, body, submit }