import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";



// Import the Poppins font with necessary weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
});


export const metadata = {
  title: "AI Flashcards",
  description: "Ai Flashcards is a flashcard app that uses AI to help you learn faster.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
