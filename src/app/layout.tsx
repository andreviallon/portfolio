import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andre Viallon Portfolio",
  description: "Andre Viallon Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background h-full">{children}</body>
    </html>
  );
}
