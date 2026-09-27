import type { Metadata } from "next";
import "./globals.css";
import MainMenu from "../components/MainMenu";


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
        {/* <MainMenu /> */}
        {children}
      </body>
    </html>
  );
}