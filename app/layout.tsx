import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AppAcres — A persistent world generated from everything you build.",
  description: "A persistent world generated from everything you build.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
