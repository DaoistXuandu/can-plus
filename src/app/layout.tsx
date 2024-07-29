import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/lib/font";

export const metadata: Metadata = {
  title: "CanPlus",
  description: "Website Digitalisasi Kantin Pertama di Indonesia",
  icons: {
    icon: ["/asset/favicon_io/favicon.ico"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
