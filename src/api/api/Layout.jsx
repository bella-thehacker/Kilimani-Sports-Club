import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kilimani Sports Club",
  description: "Home of Champions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavBar />
          <div className="pt-32">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

