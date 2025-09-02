import { Link } from '@tanstack/react-router'
import { ConnectBtn } from './Web3Kit'
import logo from '/logo.png'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-2">
      <div className="flex justify-between items-center py-6 gap-2 mx-auto px-5 w-full max-w-7xl">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[50px] w-auto" />
        </Link>
        <div className="flex gap-2"></div>
        <ConnectBtn />
      </div>
    </header>
  )
}
