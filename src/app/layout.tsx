import Footer from "@/UI/Components/Footer";
import InstallPWAButton from "@/UI/Components/InstallPWAButton";
import NavBar from "@/UI/Components/NavBar";
import { ThemeProvider } from "@/UI/Components/theme-provider";
import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Developer.WK",
  description: "My Portfolio",
};
export const viewport: Viewport = {
  themeColor: "#000319",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NavBar />

          <InstallPWAButton />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
