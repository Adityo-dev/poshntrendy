import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import components
import MainFooter from "@/components/shared/footer/MainFooter";
import MainNavigationBar from "@/components/shared/navigationBar/MainNavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Posh N Trendy - Declives Corporation Ltd.",
  description: "This site is maintained by Declives Corporation Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainNavigationBar />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
