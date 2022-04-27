import { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Mockup from '../assets/tipshot_mockup.png'
import PolygonLogo from '../assets/polygon.png'
import HowItWorksImg from '../assets/tipshot_howItWorks.png'
import styles from '../styles/Home.module.scss'
import RoadmapItem from '../components/RoadmapItem'

const Home: NextPage = () => {
  const [active, setActive] = useState(1)

  return (
    <div>
      <div className={styles.hero}>
        <div className="m-auto flex max-w-6xl flex-col items-center px-4">
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

      <div className={styles.howItWorks}>
        <div className="m-auto max-w-6xl py-24 px-4">
          <h1 className="mb-10 text-center text-4xl font-semibold text-white">
            How It Works
          </h1>

          <Image src={HowItWorksImg} alt="Flow chat on how tipshot works" />

          <div className="mt-16 md:px-8">
            <div className="flex flex-col md:flex-row w-full shadow">
              <div className="md:w-[30%] rounded-tl-md md:rounded-bl-md rounded-tr-md md:rounded-tr-none bg-white p-8 md:py-16">
                <h5 className="mb-6 text-2xl font-semibold text-gray-800">
                  Benefits
                </h5>

                <ul>
                  <li>
                    <button
                      onClick={() => setActive(1)}
                      className={`mb-2 inline-block w-full rounded-md py-3 px-4 text-left text-sm font-medium ${
                        active === 1 ? 'bg-[#FFE7E7] text-[#FF0066]' : ''
                      }`}
                    >
                      Tipsters
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActive(2)}
                      className={`mb-2 inline-block w-full rounded-md py-3 px-4 text-left text-sm font-medium ${
                        active === 2 ? 'bg-[#FFE7E7] text-[#FF0066]' : ''
                      }`}
                    >
                      Miners
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActive(3)}
                      className={`mb-2 inline-block w-full rounded-md py-3 px-4 text-left text-sm font-medium ${
                        active === 3 ? 'bg-[#FFE7E7] text-[#FF0066]' : ''
                      }`}
                    >
                      Betters
                    </button>
                  </li>
                </ul>
              </div>

              <div className="md:w-[70%] md:rounded-tr-md rounded-br-md rounded-bl-md md:rounded-bl-none bg-[#FF0066] px-14 py-20 text-white">
                <h5 className="mb-6 text-2xl font-semibold">
                  Some text goes here
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.roadmap} py-20`}>
        <div className="md:border-b border-gray-200">
          <div className="m-auto max-w-6xl px-4">
            <div className="text-center text-white">
              <h4 className="mb-16 text-4xl font-semibold">Launch Roadmap</h4>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-14 ">
              <RoadmapItem />
              <RoadmapItem />
              <RoadmapItem />
              <RoadmapItem />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.callToAction} py-24 px-4`}>
        <div className="m-auto max-w-lg text-center">
          <h3 className="text-5xl font-bold">
            Some big text <span className="text-[#FF0066]">goes here</span>
          </h3>
          <p className="mt-2 font-light">
            Join the communtiy of amazing peeople to do amazing stuffs and
            making more money
          </p>
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
        </div>
      </div>
    </div>
  )
}

export default Home
