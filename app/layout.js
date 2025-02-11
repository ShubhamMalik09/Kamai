import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
const inter = Inter({subsets:['latin']});

export const metadata = {
  title: "Kam.ai",
  description: "AI Powered Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
