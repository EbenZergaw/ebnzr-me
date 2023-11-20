
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './globals.css'
import ThemeProvider, {useTheme} from './components/ThemeContext'
import Footer from './components/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const { theme } = useTheme();

  return (
    <ThemeProvider>
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
        <Footer></Footer>
        </body>
    </ThemeProvider>
  )
}
