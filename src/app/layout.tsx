import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

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
          <h2 className="text-center">
            Professional Email Address
            <br /> Guesses Generator
            <br /> (PEAG)
          </h2>
          {children}

          <div className="container">
            <footer className="pt-3 mt-3">
              <hr />
              <p className="text-center text-body-secondary">
                All Rights Reserved For{" "}
                <a href="https://suhaib.dev" target="_blank">
                  Suhaib Ahmad
                </a>{" "}
                {new Date().getFullYear()}
              </p>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
