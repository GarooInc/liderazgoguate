import React, { useState } from 'react'
import './PrincipalPage.css'
import NavBar from "../components/NavBar/NavBar"
import Title from '../components/Title/Title'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import LogoClouds from '../components/logoClouds/logoClouds'
import Speaker from '../components/Speaker/Speaker'
import { speakers } from '../../speakers'

const PrincipalPage = () => {

    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="bg-white w-full pt-12 md:pt-20  flex items-center justify-center h-screen">
                <div className="w-full max-w-screen-xl mx-4 md:mx-auto flex flex-col md:gap-8 rounded-6xl p-4 md:p-8 items-start justify-center">
                    <Title text="Conversatorio" color="text-mcn-blue" textAlign="text-start" textsecondary={"“Liderazgo empresarial para fortalecer la institucionalidad democrática”"}/>
                    <div className="flex flex-col justify-start w-full gap-4">
                        <span className="text-l md:text-xl font-semibold leading-6 text-mcn-blue cursor-pointer md:m-0">Martes 14 de noviembre 2023</span>
                        <span className="text-l md:text-xl font-semibold leading-6 text-mcn-blue cursor-pointer  md:m-0">Hora: 12pm a 2pm</span>
                        <span className="text-l md:text-xl font-semibold leading-6 text-mcn-blue cursor-pointer  md:m-0">Lugar: Cámara Guatemalteca de la Construcción</span>
                        <span className="text-l font-semibold leading-6 text-mcn-skyblue cursor-pointer md:m-0">*Invitación personal e intransferible</span>
                    </div>
                </div>
            </section>
            <section id='/registro' className="bg-mcn-skyblue w-full md:pt-20  flex flex-col items-center justify-center py-12">
                <Title text="Registro" color="text-white" textAlign="text-center"/>
                <Form/>
            </section>
            <section id='/expositores' className="bg-mcn-skyblue w-full pt-12 md:pt-20 flex flex-col justify-center items-center">
            <Title text="Expositores" color="text-white" textAlign="text-center"/>
            <div className=" w-full  flex flex-wrap justify-center items-center">
            {
                speakers.map((speaker, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`w-full md:w-1/3 px-4 mb-8 ${index % 3 === 0 ? 'md:clear-left' : ''}`}>
                        <Speaker key={index} speaker={speaker}/>
                    </div>
                ))
            }
            </div>
            </section>
            <section id='/invitan' className="w-full p-10">
                <Title text="Invitan" color="text-mcn-blue" textAlign="text-center"/>
                <LogoClouds/>
            </section>
            <section id='footer' className="flex-shrink-0 bg-je-black h-100">
                <Footer/>
            </section>
        </div>
        
    )
}

export default PrincipalPage