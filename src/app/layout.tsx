import "./globals.css";
import { Bebas_Neue } from "next/font/google"
import { clsx } from "clsx"

const bebasf = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(bebasf.className, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
