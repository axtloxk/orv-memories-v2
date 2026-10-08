import type { Metadata } from "next";
import "./globals.css";
import { Cinzel } from "next/font/google";
import ScreenEdgesGlow from "@/components/ScreenEdgesGlow";

export const metadata: Metadata = {
  title: "ORV",
  description: "ORV novel, manwha website",
};

const vintageFont = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vintage",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vintageFont.variable}>
      <body
        className={`font-[500] relative flex min-h-screen flex-col items-center dark ${vintageFont.className}`}
      >
        {/* Static + animated screen border */}
        {/* <ScreenEdgesGlow /> */}

        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
