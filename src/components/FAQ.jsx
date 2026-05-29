import { useState, useEffect } from 'react'

function FAQ() {
    const [preguntas, setPreguntas] = useState([])
    const [cargando, setCargando] = useState(true)
    const [abierto, setAbierto] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/faq')
            .then((res) => res.json())
            .then((data) => {
                setPreguntas(data)
                setCargando(false)
            })
            .catch(() => {
                setCargando(false)
            })
    }, [])

    const togglePregunta = (id) => {
        setAbierto(abierto === id ? null : id)
    }

    return (
        <section id="faq" className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Preguntas Frecuentes
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Resolvemos tus dudas más comunes sobre nuestros servicios.
                </p>

                {cargando ? (
                    <div className="text-center text-gray-500">Cargando preguntas...</div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {preguntas.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => togglePregunta(item.id)}
                                    className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                    aria-expanded={abierto === item.id}
                                >
                                    <span className="font-semibold text-gray-800">
                                        {item.pregunta}
                                    </span>
                                    <span className="text-blue-600 text-xl font-bold ml-4">
                                        {abierto === item.id ? '−' : '+'}
                                    </span>
                                </button>

                                {abierto === item.id && (
                                    <div className="px-6 pb-4 text-gray-600">
                                        {item.respuesta}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default FAQ
