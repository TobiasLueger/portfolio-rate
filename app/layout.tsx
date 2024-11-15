import Link from 'next/link'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'PortfolioPlus',
  description: 'Showcase of top portfolio websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Header />

          <main className="flex-grow pt-28">
            {children}
          </main>

          <footer className="bg-gray-100 dark:bg-[#1a1a1a] py-8 mt-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} PortfolioRate
                  </span>
                </div>
                <nav>
                  <ul className="flex space-x-6">
                    <li>
                      <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                       About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}