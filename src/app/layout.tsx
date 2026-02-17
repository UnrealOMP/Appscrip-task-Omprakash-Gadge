import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/product-card.css";
import "../styles/filter-sidebar.css";

export const metadata: Metadata = {
  title: "Storefront",
  description: "Simple product listing page",
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
