import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forager",
  description: "A CSE3340 Interaction Design Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="max-w-[390px] mx-auto min-h-screen relative" style={{ backgroundColor: "#F1F3EB" }}>
          {children}
          <NavBar />
        </div>
      </body>
    </html>
  );
}