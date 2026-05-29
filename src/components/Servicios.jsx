import { useState, useEffect } from 'react'
import ServiceCard from './ServiceCard'

function Servicios() {
    const [servicios, setServicios] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3001/servicios')
            .then((res) => res.json())
            .then((data) => {
                setServicios(data)
                setCargando(false)
            })
            .catch(() => {
                setCargando(false)
            })
    }, [])

    const handleContactar = (nombreServicio) => {
        const formulario = document.getElementById('contacto')
        if (formulario) {
            formulario.scrollIntoView({ behavior: 'smooth' })
            const campoServicio = document.getElementById('servicio')
            if (campoServicio) {
                campoServicio.value = nombreServicio
            }
        }
    }

    return (
        <section id="servicios" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Nuestros Servicios
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Ofrecemos soluciones integrales para el crecimiento y sostenibilidad de tu empresa.
                </p>

                {cargando ? (
                    <div className="text-center text-gray-500">Cargando servicios...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicios.map((servicio) => (
                            <ServiceCard
                                key={servicio.id}
                                imagen={servicio.imagen}
                                titulo={servicio.titulo}
                                descripcion={servicio.descripcion}
                                onContactar={handleContactar}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Servicios
