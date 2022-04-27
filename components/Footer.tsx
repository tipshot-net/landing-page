import Link from "next/link"
import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-black p-10 text-center text-white">
      <div className="flex justify-center text-white">
        <Link href="/about">
          <a className="inline-block font-light text-sm hover:text-[#FF0066]">
            Contact Us
          </a>
        </Link>
        <Link href="/about">
          <a className="inline-block pl-5 text-xl hover:text-[#FF0066]">
            <FiMail />
          </a>
        </Link>
        <Link href="/about">
          <a className="inline-block pl-5 text-xl hover:text-[#FF0066]">
            <AiOutlineGithub />
          </a>
        </Link>
        <Link href="/about">
          <a className="inline-block pl-5 text-sm hover:text-[#FF0066]">
            <BsMedium />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Footer