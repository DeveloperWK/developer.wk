import NavBar from "@/UI/Components/NavBar";
import { ThemeProvider } from "@/UI/Components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Developer.WK",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
