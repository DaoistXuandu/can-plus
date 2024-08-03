import { Inter, Maven_Pro, Noto_Sans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const noto_sans = Noto_Sans({
    preload: false
})
const maven_pro = Maven_Pro({ subsets: ["latin"] });
export { inter, noto_sans, maven_pro };
