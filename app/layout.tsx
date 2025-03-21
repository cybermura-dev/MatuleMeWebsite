import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Matule Me | Спортивная обувь для активной жизни',
  description: 'Matule Me предлагает широкий выбор спортивной обуви для любых активностей. Найдите идеальную пару для ваших тренировок и повседневной жизни.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
