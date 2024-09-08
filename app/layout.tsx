import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abraham Nhier",
  description: "My portfolio",
  icons: {
    icon: "/main.jpeg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
      <FloatingNav navItems={navItems} />
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
