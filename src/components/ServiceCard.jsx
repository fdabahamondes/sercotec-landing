function ServiceCard({ imagen, titulo, descripcion, onContactar }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
        <img
            src={imagen}
            alt={titulo}
            className="w-full h-48 object-cover"
            loading="lazy"
        />
        <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
            <p className="text-gray-600 flex-1">{descripcion}</p>
            <button
            onClick={() => onContactar(titulo)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            aria-label={`Contactar por el servicio ${titulo}`}
            >
            Contáctanos
            </button>
        </div>
        </div>
    )
}

export default ServiceCard