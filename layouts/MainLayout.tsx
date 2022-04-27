import {ReactNode} from 'react'
import Head from 'next/head'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

const MainLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div>
      <Head>
        <title>Where NFTs Meet Sports Prediction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default MainLayout