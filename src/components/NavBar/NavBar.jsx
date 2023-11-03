import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll"
import {BsInstagram, BsTwitter, BsYoutube, BsTiktok, BsLinkedin,BsFacebook} from 'react-icons/bs'



const NavBar = () => {

  const navigation = [
    { name: "Acerca", href: '/' },
    { name: "Registro", href: '/registro' },
    { name: "Expositores", href: '/expositores' },
  ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-je-blue">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-0 text-white font-bold text-[40px] leading-[48px] ">
            <img className="h-12 w-auto sm:h-14" src="/images/logo.png" alt="MCN" />
          </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} className="text-sm font-semibold leading-6 text-white cursor-pointer">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1 lg:gap-x-6 md:gap-x-4">
              <a href="https://www.instagram.com/mcnguatemala/?hl=es" target="_blank" rel="noreferrer" className="text-white hover:text-mcn-orange">
                  <BsInstagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/MCNGuatemala/?locale=es_LA" target="_blank" rel="noreferrer" className="text-white hover:text-mcn-orange">
                  <BsFacebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/MCNGuatemala" target="_blank" rel="noreferrer" className="text-white hover:text-mcn-orange">
                  <BsTwitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@mcnguatemala?_t=8h20EAgX5fh&_r=1" target="_blank" rel="noreferrer" className="text-white hover:text-mcn-orange">
                  <BsTiktok className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/@MCNGuatemala" target="_blank" rel="noreferrer" className="text-white hover:text-mcn-orange">
                  <BsYoutube className="h-6 w-6" aria-hidden="true" />
              </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-0 text-je-black font-bold text-[40px] leading-[48px] ">
                <img className="h-12 w-auto sm:h-14" src="/images/logo.png" alt="MCN" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                <div className="flex gap-x-4 flex-row items-center justify-center lg:flex-1 lg:gap-x-6">
                  <a href="https://www.instagram.com/mcnguatemala/?hl=es" target="_blank" rel="noreferrer" className="text-mcn-blue">
                    <BsInstagram className="h-6 w-6 text-mcn-blue" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/MCNGuatemala/?locale=es_LA" target="_blank" rel="noreferrer" className="text-mcn-blue">
                    <BsFacebook className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/MCNGuatemala" target="_blank" rel="noreferrer" className="text-mcn-blue">
                    <BsTwitter className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://www.tiktok.com/@mcnguatemala?_t=8h20EAgX5fh&_r=1" target="_blank" rel="noreferrer" className="text-mcn-blue">
                    <BsTiktok className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/@MCNGuatemala" target="_blank" rel="noreferrer" className="text-mcn-blue">
                    <BsYoutube className="h-6 w-6" aria-hidden="true" />
                </a>
                </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
