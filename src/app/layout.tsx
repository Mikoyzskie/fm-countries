import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["300", "600", "800"] });

export const metadata: Metadata = {
  title: "Where in the World",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
