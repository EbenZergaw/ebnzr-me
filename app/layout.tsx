
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './globals.css'
import ThemeProvider from './components/ThemeContext'
import Footer from './components/Footer'
import CenteredJesusComponent from './components/CenteredJesusComponent'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ThemeProvider>
      {/* <html data-theme={theme} className={theme}> */}

        <body>
          <Navbar></Navbar>
          <section className='lg:grid lg:grid-cols-6'>
            <div className="">
              <Sidebar></Sidebar>
            </div>
            <main className='lg:col-span-5 mt-14 w-11/12 mx-auto lg:mx-0'>
              {children}
            </main>
          </section>
          <CenteredJesusComponent></CenteredJesusComponent>
        <Footer></Footer>
        </body>

      {/* </html> */}
    // </ThemeProvider>
  )
}
