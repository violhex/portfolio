import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import NoScriptStyles from "@/components/noscript-styles"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://localhost:3000'),
  title: "@glass | Senior Software Engineer",
  description:
    "Portfolio of @glass, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
  keywords: [
    "@glass",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Next.js",
    "Tailwind CSS",
    "Shadcn UI",
    "Aceternity",
  ],
  authors: [{ name: "@glass" }],
  creator: "@glass",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexuus.win",
    title: "@glass | Senior Software Engineer",
    description:
      "Portfolio of @glass, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    siteName: "@glass Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "@glass Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "@glass | Senior Software Engineer",
    description:
      "Portfolio of @glass, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    creator: "@glass",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <head>
        <NoScriptStyles />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body suppressHydrationWarning className={cn("min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <noscript>
              <div className="bg-yellow-100 dark:bg-yellow-900 p-4 text-center text-sm">
                For the best experience, please enable JavaScript. Some features may be limited without it.
              </div>
            </noscript>
            <AnimatedBackground />
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
