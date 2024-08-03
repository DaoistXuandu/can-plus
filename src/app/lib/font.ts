import { Inter, Maven_Pro, Noto_Sans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const noto_sans = Noto_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    preload: false
})
const maven_pro = Maven_Pro({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    preload: false
});
export { inter, noto_sans, maven_pro };
