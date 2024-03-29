
"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/providers";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import { ThemeProvider } from "./components/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className} style={{margin:'0',padding:'0',boxSizing:'border-box'}}
        // style={{ background: "linear-gradient(to right, #f5dae2, #cad6e7)" }}
      >
        <Providers>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
