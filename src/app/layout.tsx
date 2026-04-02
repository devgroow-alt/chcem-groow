import type { Metadata } from "next";
import { Big_Shoulders, Questrial } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GROOW Digital | Performance & Media Agency",
  description:
    "Robíme výnimočné kampane pre výnimočné firmy. Data-driven marketing agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${bigShoulders.variable} ${questrial.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
