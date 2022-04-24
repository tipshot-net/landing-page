import Head from 'next/head'

const MainLayout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Tipshot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      {children}
    </div>
  )
}

export default MainLayout