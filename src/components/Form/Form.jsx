import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        empresa: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Procesa los datos del formulario
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-3/4 md:w-full max-w-xl mx-auto bg-mcn-blue rounded-6xl shadow-md p-10 m-5">
            <div className="mb-4">
                <label className="block text-je-white text-sm font-bold mb-2" htmlFor="nombre">
                    Nombre
                </label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="nombre"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Correo
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="email"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                    Teléfono
                </label>
                <input
                    type="number"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="subject"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-je-white text-sm font-bold mb-2" htmlFor="mensaje">
                    Empresa / Organización
                </label>
                <input
                    type="text"
                    name="empresa"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:shadow-outline bg-white"
                    id="nombre"
                    required
                />
            </div>
            <button type="submit"
            onClick={handleSubmit} 
            className="w-full px-3 py-4 text-je-black bg-mcn-darksky rounded-6xl focus:bg-indigo-600 focus:outline-none">Enviar
            </button>
        </form>
    );
};

export default Form
