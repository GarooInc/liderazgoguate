import React from "react"
import { Link } from "react-scroll"

const Footer = () => {

    const navigation = [
        { name: "Acerca", href: '/' },
        { name: "Registro", href: '/registro' },
        { name: "Expositores", href: '/expositores' },
      ]

    return (
        <div className="bg-mcn-skyblue w-full pt-12 md:pt-8 md:px-4 flex-col md:flex-row flex items-start md:justify-start">
            <div className="md:w-full max-w-screen-xl mx-4 flex flex-col md:gap-8 p-2 md:p-4">
                    <div className="flex justify-center gap-4 flex-col">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} className="text-sm font-semibold leading-6 text-white cursor-pointer">
                            {item.name}
                        </Link>
                    ))}
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                        <span className="text-sm font-semibold leading-6 text-white cursor-pointer mt-4 md:m-0"> © 2023 Garoo Inc</span>
                    </div>
            </div>
        </div>
    )

}

export default Footer