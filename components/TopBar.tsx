import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import styles from '../styles/Topbar.module.scss'

const TopBar = () => {
  const [transparent, setTransparent] = useState(false)

  useEffect(() => {
    const handleTransparency = () => {
      if (window.scrollY > 100) {
        setTransparent(true)
      } else {
        setTransparent(false)
      }
    }

    window.addEventListener('scroll', handleTransparency)

    return () => document.removeEventListener('scroll', handleTransparency)
  })

  const topbarClassName = transparent ? styles.transparentTopbar : styles.topbar

  return (
    <div className={topbarClassName}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2">
        <div className="mainLogo">
          <Link href="/">
            <a className="text-2xl font-semibold text-white">
              <Image src={Logo} alt="Tipshot logo" />
            </a>
          </Link>
        </div>

        <div className="flex text-white">
          <a
            href="https://tipshot.medium.com/tipshot-what-we-are-building-a5c95d911692"
            rel="noreferrer"
            target="_blank"
            className="inline-block border-r pr-6 text-sm hover:text-[#FF0066]"
          >
            What We're Building
          </a>

          <a
            href="mailto:team@tipshot.net"
            target="_blank"
            rel="noreferrer"
            className="inline-block pl-5 text-xl hover:text-[#FF0066]"
          >
            <FiMail />
          </a>

          <a
            className="inline-block pl-5 text-xl hover:text-[#FF0066]"
            href="https://github.com/tipshot-net"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>

          <a
            href="https://medium.com/@tipshot"
            rel="noreferrer"
            target="_blank"
            className="inline-block pl-5 text-sm hover:text-[#FF0066]"
          >
            <BsMedium />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
