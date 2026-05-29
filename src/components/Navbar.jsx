import { useState } from 'react'

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false)
    
    const enlaces = [
        { href: '#nosotros', label: 'Nosotros' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#testimonios', label: 'Testimonios' },
        { href: '#faq', label: 'Preguntas Frecuentes' },
        { href: '#contacto', label: 'Contacto' },
    ]

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Navegación principal">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-blue-700">
                    Centro de Negocios
                </a>

                {/* Menú escritorio */}
                <ul className="hidden md:flex gap-6">
                    {enlaces.map((enlace) => (
                        <li key={enlace.href}>
                            <a
                                href={enlace.href}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                {enlace.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botón hamburguesa - Teléfono */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label="Abrir menú"
                    aria-expanded={menuAbierto}
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuAbierto
                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>
            </div>

            {/* Menú móvil */}
            {menuAbierto && (
                <ul className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3">
                    {enlaces.map((enlace) => (
                        <li key={enlace.href}>
                        
                            <a
                                href={enlace.href}
                                className="block text-gray-600 hover:text-blue-600 font-medium"
                                onClick={() => setMenuAbierto(false)}
                            >
                                {enlace.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar