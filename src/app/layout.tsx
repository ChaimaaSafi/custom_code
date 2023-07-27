import "@/styles/globals.css";
<<<<<<< Updated upstream
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
=======
import type { Metadata } from "next";
import { Inter } from "next/font/google";
>>>>>>> Stashed changes

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< Updated upstream
  title: 'Custom code',
  description: 'Find your code easily',
}
=======
  title: "Custom code",
  description: "Find your code easily",
};
>>>>>>> Stashed changes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
