import type { Metadata } from "next";
import "./globals.css";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Modelio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body>
        <MainMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}