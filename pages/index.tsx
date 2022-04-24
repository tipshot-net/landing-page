import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Mockup from '../assets/tipshot_mockup.png'
import PolygonLogo from '../assets/polygon.png'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className="m-auto flex max-w-6xl flex-col items-center">
          <div className="max-w-lg text-center text-white">
            <h4 className="mb-4 text-6xl font-semibold">
              Where NFTs Meet Sport Prediction
            </h4>
            <p className="font-light text-gray-100">
              Join the communtiy of amazing people to do amazing stuffs and
              making more money
            </p>
          </div>
          <div className="mt-5 flex w-full max-w-xl">
            <input
              type="email"
              name="emailAddress"
              className="mr-2 inline-block w-3/4 rounded bg-white p-3 text-sm text-gray-800 outline-0"
              placeholder="Enter your email address"
            />

            <button className="inline-block h-full w-1/3 rounded bg-[#FF0066] py-3 text-sm text-white">
              Add me to the wait list
            </button>
          </div>

          <div className={`${styles.image} max-w-5xl`}>
            <Image src={Mockup} alt="Tipshot app mockup" />
          </div>
        </div>
      </div>

      <div className={styles.whatIs}>
        <div className="m-auto max-w-md text-center text-white">
          <h4 className="mb-5 text-4xl font-semibold">
            What is <span className="font-bold">TIPSHOT</span>
          </h4>
          <p className="mb-4">
            A Decentralized Sports Betting Platform built on
          </p>

          <Link href="https://polygon.technology/">
            <a target="_blank" rel="noreferrer noopener">
              <Image src={PolygonLogo} alt="Polygon Blockchain" />
            </a>
          </Link>

          <p className="mt-4">
            We eliminate the house and risk aversion that exists within existing
            sports betting products.
          </p>
          <p>
            Our unique system and architecture will allow bettors of all shapes
            and sizes to get the bets they want to get on, when they want, at
            market-implied odds without friction
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
