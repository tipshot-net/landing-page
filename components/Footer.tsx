import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-black p-10 text-center text-white">
      <div className="flex justify-center text-white">
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
  )
}

export default Footer
