// lib/metadata.ts
import type { Metadata } from "next";

const baseUrl = "https://savannalabs.co"; // update with your real domain

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Savanna Labs — Digital. Built in Africa.",
    template: "%s | Savanna Labs",
  },
  description:
    "Savanna Labs builds modern websites, mobile apps, APIs, and databases for businesses across Africa and beyond.",
  keywords: [
    "web development",
    "mobile apps",
    "API development",
    "Software agency",
    "Malawi",
    "Africa tech",
    "Savanna Labs",
  ],
  authors: [{ name: "Savanna Labs" }],
  creator: "Savanna Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Savanna Labs",
    title: "Savanna Labs — Digital. Built in Africa.",
    description:
      "Modern websites, mobile apps, APIs, and databases — crafted with care.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savanna Labs — Digital. Built in Africa.",
    description: "Modern digital solutions, built in Africa.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};