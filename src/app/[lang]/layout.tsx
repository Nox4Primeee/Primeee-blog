import { ThemeProvider } from 'next-themes'
import { getDictionary } from '@/lib/dictionaries'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={params.lang} dict={dict} />
          <main className="min-h-screen">{children}</main>
          <Footer lang={params.lang} dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  )
}
