import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({subsets:['latin']});

export const metadata = {
  title: "Kam.ai",
  description: "AI Powered Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <ClientWrapper>{children}</ClientWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
