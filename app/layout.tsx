import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Presentation",
  description: "The Evolution of Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

