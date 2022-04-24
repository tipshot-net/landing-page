import {ReactNode} from 'react'
import Head from 'next/head'
import TopBar from '../components/TopBar'

const MainLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div>
      <Head>
        <title>Where NFTs Meet Sports Prediction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar/>

      
      {children}
    </div>
  )
}

export default MainLayout