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
              Deriving utility from NFT and blockchain technology, the Tipshot
              ecosystem facilitates a frictionless, permissionless,
              decentralized peer to peer exchange of sport prediction tips—
              tagline
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
                      Bettors
                    </button>
                  </li>
                </ul>
              </div>

              <div className="rounded-br-md rounded-bl-md bg-[#FF0066] px-14 py-20 text-white md:w-[70%] md:rounded-tr-md md:rounded-bl-none">
                {active === 1 && (
                  <>
                    <h5 className="mb-6 text-2xl font-semibold">Tipsters</h5>
                    <p>
                      Tipshot provides improved monetization opportunities for
                      professional sport analysts and tipsters, without the need
                      of trusting a central authority, the tipster takes full
                      control of the pricing and ownership of their own tips.The
                      Tipshot Decentralized Marketplace offers tipsters the
                      opportunity to sell their tips across the globe, without
                      any restrictions stifling your business growth.
                    </p>
                  </>
                )}
                {active === 2 && (
                  <>
                    <h5 className="mb-6 text-2xl font-semibold">Miners</h5>
                    <p>
                      Much like a banker who is responsible for verifying a
                      transaction before its processing, a validator verifies
                      each incoming tip before it is published and also decides
                      the outcome to the events. Validation requires staking of
                      the miner NFT, Miners earn rewards for securing the
                      network through transaction fees. Also, tipsters pay a
                      percentage of their earnings to miners as commission.
                    </p>
                  </>
                )}
                {active === 3 && (
                  <>
                    <h5 className="mb-6 text-2xl font-semibold">Bettors</h5>
                    <p>
                      Tipshot allows users to interact and transact on a global,
                      permission-less, and self-executing platform. Tipsters'
                      reviews, reputations and history is made transparent so as
                      to enable bettors to make profitable decisions. With our
                      unique money back guarantee, you only pay for winning
                      tips. The guarantee is simple: If you don't win, you don't
                      pay.
                    </p>
                  </>
                )}
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

            <div className="flex flex-col md:flex-row items-stretch md:space-x-14 ">
              <RoadmapItem
                phase="1"
                steps={[
                  'Idea Conceptualized',
                  'Protocol Architecture and design',
                  'Intro Website Launch',
                  'Roadmap Launch ',
                ]}
              />
              <RoadmapItem
                phase="2"
                steps={[
                  'Development of platform & smart contracts ',
                  'Successful Launch on Mainnet',
                  'Publishing the Code on GitHub',
                  'Tests & Audit',
                ]}
              />
              <RoadmapItem
                phase="3"
                steps={[
                  'Discord channel launch',
                  'Closed beta testing',
                  'Open beta testing',
                  'NFT presale',
                ]}
              />
              <RoadmapItem
                phase="4"
                steps={[
                  'Product Launch',
                  'Governance Token launch',
                  'Vote on V2 features',
                  'Commencement of design & implementation of V2',
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.callToAction} py-24 px-4`}>
        <div className="m-auto max-w-lg text-center">
          <h3 className="text-5xl font-bold">
            Don't Miss our <span className="text-[#FF0066]">Updates</span>
          </h3>
          <p className="mt-2 font-light">
            Join the communtiy of amazing people to do amazing stuffs and making
            more money
          </p>
          <MailList />
        </div>
      </div>
    </div>
  )
}

export default Home
