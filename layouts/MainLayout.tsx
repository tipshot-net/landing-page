import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

const MainLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div>
      <Head>
        <title>Tipshot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar/>
      {children}
      <Footer />
      <Toaster/>
    </div>
  )
}

export default MainLayout