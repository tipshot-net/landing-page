import { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Mockup from '../assets/tipshot_mockup.png'
import PolygonLogo from '../assets/polygon.png'
import HowItWorksImg from '../assets/tipshot_howItWorks.png'
import styles from '../styles/Home.module.scss'
import RoadmapItem from '../components/RoadmapItem'
import MailList from '../components/MailList'

const Home: NextPage = () => {
  const [active, setActive] = useState(1)

  return (
    <div>
      <div className={styles.hero}>
        <div className="m-auto flex max-w-6xl flex-col items-center px-4">
          <div className="max-w-lg text-center text-white">
            <h4 className="mb-4 text-5xl font-semibold md:text-6xl">
              Where NFTs Meet Sport Prediction
            </h4>
            <p className="font-light text-gray-100">
              Join the communtiy of amazing people to do amazing stuffs and
              making more money
            </p>
          </div>
          <MailList />

          <div
            className={`${styles.image} flex max-w-6xl flex-col items-center md:flex-row`}
          >
            <Image src={Mockup} alt="Tipshot app mockup" />

            <div className="my-10 max-w-sm text-center text-white md:my-0 md:ml-10">
              <h4 className="mb-5 text-3xl font-semibold">
                Tipshot is a decentralized sports betting tips platform built on
              </h4>

              <Link href="https://polygon.technology/">
                <a target="_blank" rel="noreferrer noopener">
                  <Image src={PolygonLogo} alt="Polygon Blockchain" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.howItWorks}>
        <div className="m-auto max-w-6xl py-24 px-4">
          <h1 className="mb-10 text-center text-4xl font-semibold text-white">
            How It Works
          </h1>

          <Image src={HowItWorksImg} alt="Flow chat on how tipshot works" />

          <div className="mt-16 md:px-8">
            <div className="flex w-full flex-col shadow md:flex-row">
              <div className="rounded-tl-md rounded-tr-md bg-white p-8 md:w-[30%] md:rounded-bl-md md:rounded-tr-none md:py-16">
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

              <div className="rounded-br-md rounded-bl-md bg-[#FF0066] px-14 py-20 text-white md:w-[70%] md:rounded-tr-md md:rounded-bl-none">
                <h5 className="mb-6 text-2xl font-semibold">
                  Some text goes here
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.roadmap} py-20`}>
        <div className="border-gray-200 md:border-b">
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
          <MailList />
        </div>
      </div>
    </div>
  )
}

export default Home
