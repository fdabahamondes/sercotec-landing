import { useState, useEffect } from 'react'

function Nosotros() {
    const [datos, setDatos] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3001/nosotros')
            .then((res) => res.json())
            .then((data) => {
                setDatos(data)
                setCargando(false)
            })
            .catch(() => {
                setCargando(false)
            })
    }, [])

    if (cargando) {
        return (
            <section id="nosotros" className="py-16 bg-white">
                <div className="text-center text-gray-500">Cargando...</div>
            </section>
        )
    }

    return (
        <section id="nosotros" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Texto */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            ¿Quiénes somos?
                        </h2>
                        <p className="text-gray-600 mb-4">
                            El <strong>Centro de Negocios Santiago de SERCOTEC</strong> es una institución
                            {datos?.descripcion1 ? ` ${datos.descripcion1.replace('El Centro de Negocios Santiago de SERCOTEC es una institución', '').trim()}` : ''}
                        </p>
                        <p className="text-gray-600 mb-4">{datos?.descripcion2}</p>
                        <p className="text-gray-600">{datos?.descripcion3}</p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            {datos?.estadisticas?.map((stat, index) => (
                                <div key={index} className="bg-blue-50 rounded-xl p-4 text-center flex-1">
                                    <p className="text-3xl font-bold text-blue-600">{stat.valor}</p>
                                    <p className="text-gray-600 text-sm">{stat.etiqueta}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Imagen */}
                    <div>
                        <img
                            src={datos?.imagen}
                            alt="Equipo Centro de Negocios SERCOTEC"
                            className="rounded-2xl shadow-lg w-full object-cover h-96"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Nosotros
