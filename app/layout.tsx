import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './globals.css'


export const metadata: Metadata = {
  title: 'Ebenezers Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>
        <Navbar></Navbar>
        <section className='lg:grid lg:grid-cols-6'>
          <div className="lg:c">
            <Sidebar></Sidebar>
          </div>
          <main className='lg:col-span-5 mt-14 ml-10'>
            {children}
          </main>
        </section>
      </body>
    </html>
  )
}
