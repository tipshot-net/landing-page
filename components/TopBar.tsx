import Image from 'next/image'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'
import Logo from '../assets/logo.png'

const TopBar = () => {
  return (
    <div className="fixed w-full py-14">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="mainLogo">
          <Link href="/">
            <a className="text-2xl font-semibold text-white">
              <Image src={Logo} alt="Tipshot logo" />
            </a>
          </Link>
        </div>

        <div className="flex text-white">
          <Link href="/about">
            <a className="inline-block border-r pr-6 text-sm hover:text-[#FF0066]">
              About Us
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-block pl-5 text-xl hover:text-[#FF0066]">
              <FiMail />
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-block pl-5 text-xl hover:text-[#FF0066]">
              <AiOutlineGithub/>
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-block pl-5 text-sm hover:text-[#FF0066]">
              <BsMedium/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar
