import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FlashAI",
  description: "FlashAI is a flashcard app that uses AI to help you learn faster.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Analytics />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
