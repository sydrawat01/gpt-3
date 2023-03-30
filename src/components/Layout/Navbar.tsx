import { FC } from 'react'
import logo from '../../assets/GPT-3.svg'

const Navbar: FC = () => {
  return (
    <>
      <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between">
        <div className="font-bold text-3xl flex items-center">
          <img
            src={logo}
            className=" h-8 w-8 ml-2 hover:opacity-50"
            alt="GPT-3"
          />
          <a className="ml-2 hover:opacity-50" href="#">
            GPT-3 Bot
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
