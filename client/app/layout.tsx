"use client";
// import type { Metadata } from "next";
import i18next from "i18next";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import global_en from "../components/translations/en/global.json";
import global_jp from "../components/translations/jp/global.json";
import "./globals.css";
import StoreProvider from "./storeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en", // default language to use
  resources: {
    en: {
      global: global_en,
    },
    jp: {
      global: global_jp,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // // ? password protection logic-------------------------------------------------------------
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const storedPassword = localStorage.getItem("password");
  //   const correctPassword = "gta6gamer";

  //   if (storedPassword === correctPassword) {
  //     setIsAuthenticated(true);
  //   } else {
  //     const password = prompt("Please enter the password:");
  //     if (password === correctPassword) {
  //       localStorage.setItem("password", password);
  //       setIsAuthenticated(true);
  //     } else {
  //       alert("Incorrect password!");
  //     }
  //   }
  // }, []);

  // if (!isAuthenticated) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <div className="text-red-500 text-4xl text-center">Access Denied</div>
  //     </div>
  //   );
  // }
  // // ? password protection logic end-------------------------------------------------------------

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ffffff]`}
      >
        <I18nextProvider i18n={i18next}>
          <StoreProvider>{children}</StoreProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
