const place = [
    "Universitas Indonesia",
    "Kantin Balgebun Fakultas Ilmu Komputer",
    "Universitas Padjajaran",
    "Depot Mas Aji",
    "Warkop 121"
]

const menu = [
    "Bakmie Goreng",
    "Ayam Goreng"
]

const stall = [
    {
        name: "Depot Mas Aji",
        location: "Kantin Bawah Fakultas Psikologi, UI",
        rating: "4.2",
        description: "Menyediakan Ayam Panggang, Ayam Goreng dan semua ayam. Serta minuman penyegar hari baik yang bersusu, soda, hingga campuran minuman yang belum pernah kamu coba dsdjknsjdsn",
        time: {
            open: "10.00",
            close: "Selesai"
        },
        image: "/image/user/background_stall.png",
        menu: [
            {
                section: "Makanan",
                list: [
                    {
                        name: "Mie Ayam sm , sm dmsan,mewnlkfn.jewn.,fhklehwlfh34klejwhfliehwk;fhkjewnafljkchlkewaf,jheakjfej.wfbk.eflhkewbkjfvhfwe.kjewffekgjfekbjfew.kbjwe.jkewkj.",
                        price: "15.000",
                        image: "/image/user/background_food.jpg",
                        availibility: true
                    },
                    {
                        name: "Bakso",
                        price: "15.000",
                        image: "/image/user/background_food.jpg",
                        availibility: false
                    },
                ]
            },
            {
                section: "Snack",
                list: [
                    {
                        name: "Mie Ayam sm , sm dmsan,mewnlkfn.jewn.,fhklehwlfh34klejwhfliehwk;fhkjewnafljkchlkewaf,jheakjfej.wfbk.eflhkewbkjfvhfwe.kjewffekgjfekbjfew.kbjwe.jkewkj.",
                        price: "10.000",
                        image: "/image/user/background_food.jpg",
                        availibility: false
                    },
                    {
                        name: "Pop Ice",
                        price: "7.000",
                        image: "/image/user/background_food.jpg",
                        availibility: true
                    },
                ]
            }
        ]
    },
    {
        name: "Warkop Bang Asep",
        location: "Kantin Balgebun Fakultas Ilmu Komputer, Universitas Indonesia",
        rating: "2.7",
        description: "Menyediakan Ayam Panggang, Ayam Goreng dan semua ayam. Serta minuman penyegar hari baik yang bersusu, soda, hingga campuran minuman yang belum pernah kamu coba dsdjknsjdsn",
        time: {
            open: "08.00",
            close: "15.00"
        },
        image: "/image/user/background_stall.png",
        menu: [{
            section: "Makanan",
            list: [
                {
                    name: "Gorengan",
                    price: "2.000",
                    image: "/image/user/background_food.jpg",
                    availibility: true
                },
                {
                    name: "Weci",
                    price: "1.000",
                    image: "/image/user/background_food.jpg",
                    availibility: false
                },
            ]
        },
        {
            section: "Minuman",
            list: [
                {
                    name: "Wedang",
                    price: "10.000",
                    image: "/image/user/background_food.jpg",
                    availibility: false
                },
                {
                    name: "Pop Ice",
                    price: "7.000",
                    image: "/image/user/background_food.jpg",
                    availibility: true
                },
            ]
        }
        ]
    }

]

export {
    place, menu, stall
}
