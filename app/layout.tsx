import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/navigation/footer";
import Header from "@/components/navigation/header";
import { Toaster } from "@/components/ui/sonner";
import { generateMetadata } from "@/lib/generate-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
