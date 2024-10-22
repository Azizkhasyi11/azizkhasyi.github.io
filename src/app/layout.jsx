import { Montserrat } from 'next/font/google';
import "./globals.css";
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "BolehNgopi - Portfolio",
  description:
    "Welcome to the portfolio of Aziz Khasyi, a passionate web developer and tech enthusiast. Explore projects, technologies, and get in touch.",
  keywords: "Aziz Khasyi, BolehNgopi, web developer, portfolio, projects, tech enthusiast, JavaScript, React, web design",
  openGraph: {
    title: "BolehNgopi - Portfolio",
    description:
      "A showcase of projects and technologies by Aziz Khasyi, web developer and tech enthusiast.",
    url: "https://bolehngopi.github.io",  // Update with actual URL
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bolehngopi", // Update with actual Twitter handle
    title: "BolehNgopi - Portfolio of Aziz Khasyi",
    description:
      "Explore the projects and skills of Aziz Khasyi, a passionate web developer and tech enthusiast.",
  },
  robots: "index, follow", // Allow search engines to index and follow links
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body
        className={`${montserrat.className} antialiased `}
      >
        {children}
      </body>
      <GoogleAnalytics gaId='G-3SXBNKL6K2' />
    </html>
  );
}
