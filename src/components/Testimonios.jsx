import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonios = [
    {
        id: 1,
        nombre: "María González",
        empresa: "Panadería Don Pedro",
        texto: "Gracias al Centro de Negocios logramos digitalizar nuestro negocio y aumentar las ventas en un 40%. El acompañamiento fue fundamental.",
        cargo: "Dueña"
    },
    {
        id: 2,
        nombre: "Carlos Muñoz",
        empresa: "Ferretería Los Andes",
        texto: "El apoyo en gestión financiera nos permitió ordenar nuestras finanzas y acceder a un programa de financiamiento que no conocíamos.",
        cargo: "Gerente General"
    },
    {
        id: 3,
        nombre: "Ana Martínez",
        empresa: "Boutique Alma",
        texto: "Las capacitaciones en marketing digital transformaron nuestra presencia online. Hoy vendemos a todo Chile desde nuestra tienda.",
        cargo: "Fundadora"
    },
    {
        id: 4,
        nombre: "Roberto Silva",
        empresa: "Taller Mecánico Silva",
        texto: "El plan de mejora que nos entregaron fue clave para superar la crisis. Hoy somos más eficientes y rentables que antes.",
        cargo: "Propietario"
    }
]

function Testimonios() {
    return (
        <section id="testimonios" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Lo que dicen nuestros clientes
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Empresas que han transformado su negocio con nuestro apoyo.
            </p>
            <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
                768: { slidesPerView: 2 }
            }}
            className="pb-12"
            aria-label="Carrusel de testimonios de clientes"
            >
            {testimonios.map((t) => (
                <SwiperSlide key={t.id}>
                <div className="bg-gray-50 rounded-2xl p-8 shadow-md h-full flex flex-col justify-between">
                    <p className="text-gray-700 italic mb-6">"{t.texto}"</p>
                    <div>
                    <p className="font-bold text-gray-800">{t.nombre}</p>
                    <p className="text-sm text-blue-600">{t.cargo} — {t.empresa}</p>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    )
}

export default Testimonios