import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { JetBrains_Mono, Montserrat } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Make Math Simple",
  description: "Management system for Make Math Simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} ${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
