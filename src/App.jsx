import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Nosotros from './components/Nosotros'

const Servicios = lazy(() => import('./components/Servicios'))
const Testimonios = lazy(() => import('./components/Testimonios'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contacto = lazy(() => import('./components/Contacto'))
const BotonArriba = lazy(() => import('./components/BotonArriba'))

function App() {
    return (
        <div>
            <Navbar />
            <Nosotros />
            <Suspense fallback={<div className="text-center py-16 text-gray-500">Cargando...</div>}>
                <Servicios />
                <Testimonios />
                <FAQ />
                <Contacto />
                <BotonArriba />
            </Suspense>
        </div>
    )
}

export default App
