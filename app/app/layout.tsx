
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvara — Make room for what's possible",
  description:
    "A thoughtful collection of AI tools to help you learn, create and get things done."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
