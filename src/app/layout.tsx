import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PEAG",
  description: "Professional Emails Address Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " d-flex min-vh-100"}>
        <main className="form-signin w-100 m-auto">
          <Header />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
