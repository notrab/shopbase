import './globals.css'

import { Inter } from 'next/font/google'
import Filter from './filter'
import { Header } from './header'
import { Breadcrumbs } from './breadcrumbs'
// import { ActiveFilters } from './active-filters'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShopBase',
  description: 'Grafbase Serverless Search Product Demo'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <Filter />
            </div>
            <div className="col-span-3">
              <div className="space-y-12">
                <Breadcrumbs />
                <h1 className="text-black text-2xl md:text-4xl font-medium">
                  New Items
                </h1>
                {/* <ActiveFilters /> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
