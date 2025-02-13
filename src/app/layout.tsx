import Footer from "@/UI/Components/Footer";
import NavBar from "@/UI/Components/NavBar";
import { ThemeProvider } from "@/UI/Components/theme-provider";
import SessionProviderWrapper from "@/UI/lib/SessionProviderWrapper";
import DisableContextMenu from "@/Utils/DisableContextMenu";
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
        <SessionProviderWrapper>
          <DisableContextMenu>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              <NavBar />
              {children}
              <Footer />
            </ThemeProvider>
          </DisableContextMenu>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
