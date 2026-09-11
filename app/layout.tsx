import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Kelengkeng Fresh | Buah Segar Berkualitas",
  description:
    "Website penjualan buah kelengkeng segar berkualitas dengan harga terjangkau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}