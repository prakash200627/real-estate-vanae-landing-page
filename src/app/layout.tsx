
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vanae.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vanae | A More Considered Way to Live",
    template: "%s | Vanae",
  },
  description:
    "Discover Vanae, a considered approach to contemporary real estate, thoughtful architecture and elevated everyday living.",
  applicationName: "Vanae",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Vanae",
    title: "Vanae | A More Considered Way to Live",
    description:
      "Thoughtful spaces. Timeless design. A more considered way to live.",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#292f26",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
