import { useState } from 'react'

function Contacto() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        servicio: '',
        mensaje: '',
        honeypot: ''
    })

    const [enviado, setEnviado] = useState(false)
    const [errores, setErrores] = useState({})
    const [errorServidor, setErrorServidor] = useState('')
    const [enviando, setEnviando] = useState(false)

    const serviciosOpciones = [
        'Acompañamiento Preventivo',
        'Acompañamiento Correctivo',
        'Gestión y Capacitación',
        'Eficiencia y Sostenibilidad',
        'Vinculación Empresarial',
        'Financiamiento e Innovación'
    ]

    // Validación del lado del cliente
    const validarCliente = () => {
        const nuevosErrores = {}
        if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio'
        if (!formulario.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
            nuevosErrores.email = 'El email no es válido'
        }
        if (!formulario.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio'
        return nuevosErrores
    }

    // Validación del lado del servidor (json-server actúa como backend)
    const validarServidor = (datos) => {
        const erroresServidor = []
        if (!datos.nombre || datos.nombre.trim().length < 2) {
            erroresServidor.push('El nombre debe tener al menos 2 caracteres.')
        }
        if (!datos.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
            erroresServidor.push('El email no tiene un formato válido.')
        }
        if (!datos.mensaje || datos.mensaje.trim().length < 10) {
            erroresServidor.push('El mensaje debe tener al menos 10 caracteres.')
        }
        return erroresServidor
    }

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value })
        setErrores({ ...errores, [e.target.name]: '' })
        setErrorServidor('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Protección honeypot
        if (formulario.honeypot) return

        // Validación cliente
        const erroresCliente = validarCliente()
        if (Object.keys(erroresCliente).length > 0) {
            setErrores(erroresCliente)
            return
        }

        setEnviando(true)
        setErrorServidor('')

        const datos = {
            nombre: formulario.nombre.trim(),
            email: formulario.email.trim(),
            servicio: formulario.servicio,
            mensaje: formulario.mensaje.trim(),
            fecha: new Date().toISOString()
        }

        // Validación del servidor antes de enviar
        const erroresDeServidor = validarServidor(datos)
        if (erroresDeServidor.length > 0) {
            setErrorServidor(erroresDeServidor.join(' '))
            setEnviando(false)
            return
        }

        try {
            const respuesta = await fetch('http://localhost:3001/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            })

            if (!respuesta.ok) {
                throw new Error('Error en el servidor')
            }

            setEnviado(true)
            setFormulario({ nombre: '', email: '', servicio: '', mensaje: '', honeypot: '' })
        } catch {
            setErrorServidor('Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.')
        } finally {
            setEnviando(false)
        }
    }

    return (
        <section id="contacto" className="py-16 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Contáctanos
                </h2>
                <p className="text-center text-gray-600 mb-10">
                    Completa el formulario y un asesor se pondrá en contacto contigo.
                </p>

                {enviado ? (
                    <div className="bg-green-100 text-green-700 p-6 rounded-2xl text-center font-semibold">
                        ✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                        {/* Error del servidor */}
                        {errorServidor && (
                            <div className="bg-red-100 text-red-700 p-4 rounded-lg text-sm">
                                ⚠️ {errorServidor}
                            </div>
                        )}

                        {/* Nombre */}
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                                Nombre completo *
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={handleChange}
                                placeholder="Ej: María González"
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errores.nombre && (
                                <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Correo electrónico *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formulario.email}
                                onChange={handleChange}
                                placeholder="Ej: maria@empresa.cl"
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errores.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errores.email && (
                                <p className="text-red-500 text-sm mt-1">{errores.email}</p>
                            )}
                        </div>

                        {/* Servicio */}
                        <div>
                            <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                                Servicio de interés
                            </label>
                            <select
                                id="servicio"
                                name="servicio"
                                value={formulario.servicio}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Selecciona un servicio</option>
                                {serviciosOpciones.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje *
                            </label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                value={formulario.mensaje}
                                onChange={handleChange}
                                placeholder="Cuéntanos en qué podemos ayudarte..."
                                rows={5}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errores.mensaje ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errores.mensaje && (
                                <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>
                            )}
                        </div>

                        {/* Campo honeypot - protección contra bots */}
                        <input
                            type="text"
                            name="honeypot"
                            value={formulario.honeypot}
                            onChange={handleChange}
                            className="hidden"
                            tabIndex="-1"
                            autoComplete="off"
                            aria-hidden="true"
                        />

                        {/* Botón */}
                        <button
                            type="submit"
                            disabled={enviando}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            {enviando ? 'Enviando...' : 'Enviar mensaje'}
                        </button>

                    </form>
                )}
            </div>
        </section>
    )
}

export default Contacto
