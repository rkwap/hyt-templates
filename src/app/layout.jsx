import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HYT Profile Templates",
  description: "Profile rendering templates engine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} relative mx-auto min-h-screen max-w-[1920px] antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
