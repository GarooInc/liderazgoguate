import React, { useState } from 'react';
import styles from './Form.module.css'

const Form = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [popupMessage, setPopupMessage] = useState("")

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        number: '',
        empresa: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

         // Create a timestamp for the current time
        const timestamp = new Date();

        const submission = {
            ...formData,
            fecha: timestamp.toISOString()  
        }   

        console.log(submission)

        try {
            const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submission), 
            })

            console.log(response)

            if (response.ok) {
                setPopupMessage("Formulario enviado exitosamente!")
                setShowPopup(true)
            } else {
                setPopupMessage("Error al enviar el formulario. Inténtalo de nuevo.");
                setShowPopup(true)
            }
        } catch (error) {
            console.error("Hubo un error:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-3/4 md:w-full max-w-xl mx-auto bg-mcn-blue rounded-6xl shadow-md p-10 m-5">
            {showPopup && (
                <div className={styles.popup}>
                    <p>{popupMessage}</p>
                    <button onClick={() => {
                        setShowPopup(false)
                    }}>Ok</button>
                </div>
            )}
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="nombre">
                    Nombre *
                </label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-mcn-blue border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="nombre"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Correo *
                </label>
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-mcn-blue border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="correo"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                    Teléfono *
                </label>
                <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-mcn-blue border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="number"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-je-white text-sm font-bold mb-2" htmlFor="mensaje">
                    Empresa / Organización *
                </label>
                <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-mcn-blue border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="empresa"
                    required
                />
            </div>
            <button type="submit"
                disabled={!formData.nombre || !formData.correo || !formData.number || !formData.empresa} 
                className={`w-full px-3 py-4 text-white ${(!formData.nombre || !formData.correo || !formData.number || !formData.empresa) ? 'bg-gray-300' : 'bg-mcn-darksky'} rounded-6xl focus:outline-none`}
                >
                Enviar
            </button>
        </form>
    )
}

export default Form
