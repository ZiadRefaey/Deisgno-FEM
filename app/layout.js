import { Jost } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Designo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} text-white overflow-x-hidden`}>
        <NavBar />
        <main className={` m-auto`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
