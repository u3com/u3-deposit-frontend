import { Link } from '@tanstack/react-router'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { RiTwitterXLine } from 'react-icons/ri'

const socials = [
  { link: '/#facebook', icon: <FiFacebook /> },
  { link: '/#instagram', icon: <FiInstagram /> },
  { link: '/#twitterx', icon: <RiTwitterXLine /> },
]

const links = [
  { link: 'https://u3.com', text: 'Official website' },
  { link: '/#', text: 'Security Report' },
  { link: 'https://card.u3.com', text: 'U3 Card' },
  { link: 'https://mt.u3.com', text: 'U3 Martin' },
  { link: 'https://misttrack.io/aml_risks/', text: 'SlowMist' },
  { link: 'https://blacklist.bitrace.io/', text: 'Bitrace' },
]

export function Footer() {
  return (
    <div className="w-full flex flex-col bg-[#1e1f20] py-6  text-white">
      <div className="max-w-7xl flex flex-col mx-auto px-5 w-full gap-6">
        <div className="flex justify-between gap-5 w-full flex-wrap items-center">
          <div className="text-[clamp(33px,2.865vw,110px)] font-bold">
            The future is here
          </div>
          <div className="flex items-center gap-5">
            {socials.map((item) => (
              <Link
                to={item.link}
                target="_blank"
                key={item.link}
                className="aspect-square w-14 text-3xl flex justify-center items-center rounded-full border border-orange-400/70 hover:bg-orange-400/70 hover:text-white text-orange-400/70"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] border-t-2 border-dashed border-[#92949f]"></div>
        <div className="w-full flex gap-8 justify-between flex-wrap">
          <div className="flex-1 min-w-[20rem] flex flex-col gap-6 items-center">
            <img src="logo2.png" className="h-8 w-auto" />
            <div className="text-center">
              Aims to create a "user-led Web3 future". It is a global technology
              investment institution that focuses on cutting-edge technologies
              such as blockchain, Web3, and AI, with the goal of building a
              user-core Web3 ecosystem.
            </div>
          </div>
          <div className="flex-1 min-w-[20rem] flex flex-col gap-6 items-center">
            <div className="h-8 text-2xl font-semibold">Explore</div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text">
              {links.map((item, i) => (
                <Link
                  to={item.link}
                  key={`link_${i}`}
                  className="hover:text-orange-400/70"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full text-center text-[#faf7f2] py-3">
          CopyRight © U3 All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
