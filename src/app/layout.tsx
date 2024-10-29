
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { ReactNode } from "react";



const  jetBrainsMono = JetBrains_Mono({subsets: ["latin"], weight:["100","200","300","400","500","600","700","800",],
  variable:'--font-jetbrainsMono'
})

export const metadata: Metadata = {
  title: "Portfolio Rassoul",
  description: "C'est un portfolio realiser avcec next js",
};
interface RootLayoutProps {
  children :ReactNode
}

export default function RootLayout({children} :RootLayoutProps
) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}> 
       
        <Header/>
       {/* <StairTransition/> */}
        {/* < PageTransition> */}
         {children}
        {/* </PageTransition> */}
        </body>
    </html>
  );
}
