import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Personal portfolio showcasing my projects, skills, and experience as a Full Stack Developer. Explore my work and get in touch.",
  keywords: ["portfolio", "developer", "full stack", "web development", "projects"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Portfolio | Full Stack Developer",
    description: "Personal portfolio showcasing my projects, skills, and experience as a Full Stack Developer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full Stack Developer",
    description: "Personal portfolio showcasing my projects, skills, and experience as a Full Stack Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
