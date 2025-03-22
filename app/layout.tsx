import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from './components/layout/Footer'
import LayoutContent from './components/layout/LayoutContent'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Matule Me - Мобильное приложение для спортивной обуви',
  description: 'Matule Me — ваш надежный магазин качественной спортивной обуви. Широкий выбор моделей для бега, тренировок и повседневной носки. Доставка по всей России.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        <LayoutContent>{children}</LayoutContent>
        <Footer />
      </body>
    </html>
  )
}
