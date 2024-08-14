import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Flashcards",
  description: "Ai Flashcards is a flashcard app that uses AI to help you learn faster.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
