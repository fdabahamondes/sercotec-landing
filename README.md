# "Centro de Negocios SERCOTEC - Landing Page", Evaluación U3

**Nombre:** Fernanda Bahamondes
**Asignatura:** Desarrollo de Frontend - Sección 50

---

# INTRODUCCIÓN DEL PROYECTO

Este proyecto consiste en el desarrollo de una landing page para el Centro de Negocios
Santiago de SERCOTEC, institución dedicada al apoyo y acompañamiento de micro, pequeñas
y medianas empresas.

La landing page permite:

- Conocer los servicios que ofrece el Centro de Negocios
- Ver testimonios de empresas que han trabajado con ellos
- Consultar preguntas frecuentes
- Contactar al equipo a través de un formulario

El objetivo principal es demostrar el uso de componentes reutilizables en React,
consumo de APIs, diseño responsive, accesibilidad y buenas prácticas de desarrollo
frontend.

---

# DESPLIEGUE

La landing page está desplegada y disponible en:

**https://sercotec-landing-three.vercel.app**

El despliegue se realizó con **Vercel**, conectado directamente al repositorio de GitHub.
Cada push a la rama `main` genera un nuevo deploy automático.

---

# REPOSITORIO GITHUB

**https://github.com/fdabahamondes/sercotec-landing**

### Ramas del proyecto

| Rama                           | Descripción                                              |
| ------------------------------ | -------------------------------------------------------- |
| `main`                         | Rama principal con código estable y desplegado           |
| `feature/service-card`         | Desarrollo del componente ServiceCard reutilizable       |
| `feature/carrusel-testimonios` | Implementación del carrusel con Swiper.js                |
| `feature/cms-json-server`      | Integración del CMS con json-server                      |
| `feature/faq-api`              | Sección FAQ con consumo de API                           |
| `feature/formulario-contacto`  | Formulario de contacto con validación y honeypot         |
| `feature/optimizacion`         | Code splitting con React.lazy y lazy loading de imágenes |

### Flujo de trabajo Git

Cada funcionalidad se desarrolló en su propia rama, luego se abrió un **Pull Request**
hacia `main`, se revisó el código y se fusionó documentando los cambios en cada commit.
Ejemplo de commits:

```
feat: agregar componente ServiceCard reutilizable con props imagen, titulo, descripcion
feat: implementar carrusel de testimonios con Swiper.js responsive
feat: integrar json-server como CMS local en puerto 3001
feat: consumir endpoint /servicios desde componente Servicios
feat: consumir endpoint /faq desde componente FAQ
feat: agregar validacion de formulario y proteccion honeypot
perf: implementar React.lazy y Suspense para code splitting
docs: actualizar README con instrucciones de instalacion y ejemplos
```

---

# TECNOLOGÍAS UTILIZADAS

- React 18 (Framework frontend)
- Vite 5 (Herramienta de desarrollo y build)
- Tailwind CSS 3 (Estilos utilitarios)
- Swiper.js (Carrusel de testimonios)
- json-server (CMS local para administración de contenido)
- Postman (Prueba y administración del CMS)

---

# ARQUITECTURA DEL PROYECTO

El proyecto está organizado por componentes, donde cada uno cumple una función
específica dentro de la landing page.

- **Navbar:** Navegación principal responsive con menú hamburguesa para móvil
- **Nosotros:** Presentación institucional del Centro de Negocios
- **Servicios:** Grilla de tarjetas de servicios, consume datos del endpoint `/servicios`
- **Testimonios:** Carrusel responsive con Swiper.js
- **FAQ:** Acordeón de preguntas frecuentes, consume datos del endpoint `/faq`
- **Contacto:** Formulario con validación y protección contra bots
- **BotonArriba:** Botón flotante para volver al inicio con scroll suave

---

# ESTRUCTURA DEL PROYECTO

```
sercotec-landing/
├── api/
│    └── db.json
│
├── src/
│    ├── components/
│    │    ├── Navbar.jsx
│    │    ├── Nosotros.jsx
│    │    ├── Servicios.jsx
│    │    ├── ServiceCard.jsx
│    │    ├── Testimonios.jsx
│    │    ├── FAQ.jsx
│    │    ├── Contacto.jsx
│    │    └── BotonArriba.jsx
│    │
│    ├── data/
│    │    └── servicios.js
│    │
│    ├── App.jsx
│    ├── index.css
│    └── main.jsx
│
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# EJECUCIÓN DEL PROYECTO

1. Clonar el repositorio

```bash
git clone https://github.com/fdabahamondes/sercotec-landing.git
cd sercotec-landing
```

2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Iniciar el CMS local (en otro terminal):

```bash
npm run api
```

5. Abrir el navegador en la ruta:

```
http://localhost:5173
```

**Importante:** El CMS local debe estar corriendo (`npm run api`)
para que las secciones Servicios y FAQ carguen los datos correctamente.

---

# COMPONENTES DESARROLLADOS

   ## ServiceCard
   Tarjeta reutilizable para mostrar servicios. Recibe imagen, título, descripción
   y una función que al hacer clic en "Contáctanos" lleva al formulario pre-llenado
   con el servicio seleccionado.

    ```jsx
    <ServiceCard
        imagen="url-de-imagen"
        titulo="Nombre del servicio"
        descripcion="Descripción del servicio"
        onContactar={(servicio) => console.log(servicio)}
    />
    ```

   ## Testimonios
   Carrusel responsive construido con "Swiper.js". Muestra 1 testimonio en móvil
   y 2 en escritorio, con autoplay, navegación con flechas y puntos de paginación.
   Incluye `aria-label` para accesibilidad.

   ## FAQ
   Acordeón interactivo que consume datos del endpoint `/faq` del CMS local.
   Los datos se obtienen dinámicamente con `fetch` y `useEffect`.
   Solo se puede tener una pregunta abierta a la vez.

   ## Contacto
   Formulario con validación del lado del cliente en nombre, email y mensaje.
   Incluye protección honeypot contra bots y mensaje de confirmación al enviar.

---

# CMS CON JSON-SERVER Y POSTMAN

El proyecto incluye un CMS local disponible en `http://localhost:3001` que permite
administrar el contenido de servicios, testimonios y FAQ sin tocar el código.

   ## Endpoints disponibles

    - GET /nosotros
    - GET /servicios
    - GET /testimonios
    - GET /faq
    - POST /contacto (recibe y valida los datos del formulario)

---

   ## POST /servicios

   Body:

    ```json
    {
        "titulo": "Nuevo Servicio",
        "descripcion": "Descripción del servicio.",
        "imagen": "url-de-imagen"
    }
    ```

---

   ## PUT /servicios/:id

    Body:

    ```json
    {
    "titulo": "Servicio Actualizado",
    "descripcion": "Nueva descripción.",
    "imagen": "url-de-imagen"
    }
    ```

---

   ## DELETE /servicios/:id

---

   ## POST /faq

    Body:

    ```json
    {
    "pregunta": "¿Nueva pregunta?",
    "respuesta": "Respuesta a la pregunta."
    }
    ```

---

# OPTIMIZACIÓN DE RENDIMIENTO

   ## Code splitting con `React.lazy` y `Suspense`:
   Los componentes `Servicios`, `Testimonios`, `FAQ`,
   `Contacto` y `BotonArriba` se cargan de forma diferida,
   reduciendo el bundle inicial.

   ## `loading="lazy"` en imágenes:
   Todas las imágenes fuera del viewport inicial se cargan
   solo cuando el usuario se acerca a ellas.

   ## Vite como bundler:
   Genera chunks optimizados automáticamente en el build de producción.

---

# SEGURIDAD IMPLEMENTADA

- Validación del lado del cliente en el formulario de contacto
- Protección honeypot contra bots (campo oculto que los bots rellenan
    automáticamente, bloqueando el envío)
- Atributo `noValidate` para control total de la validación desde React
- Mensajes de error claros y específicos por campo

---

# ACCESIBILIDAD Y USABILIDAD (WCAG 2.1)

- Uso de `aria-label` en botones sin texto visible
- Uso de `role="navigation"` en la barra de navegación
- Atributo `alt` descriptivo en todas las imágenes
- Atributo `aria-expanded` en el menú hamburguesa y acordeón FAQ
- Atributo `aria-hidden="true"` en el campo honeypot
- Diseño responsive adaptado al móvil y escritorio
- Contraste de colores suficiente en todos los textos

---

# GUÍA DE BUENAS PRÁCTICAS

   ## 1. Nomenclatura de componentes
   Los componentes siempre en **PascalCase**.

    ```jsx
    function ServiceCard() {}  // Correcto

    function servicecard() {}  // Incorrecto
    ```

   ## 2. Nomenclatura de variables y funciones
   Siempre en **camelCase**.

    ```jsx
    const [menuAbierto, setMenuAbierto] = useState(false)
    const handleChange = (e) => {} // Correcto

    // Incorrecto
    const [menu_abierto, setmenuabierto] = useState(false)
    ```

   ## 3. Estructura de archivos
   Cada componente en su propio archivo dentro de `src/components/`.
   Los datos estáticos en `src/data/`.

   ## 4. Props claras y descriptivas

    ```jsx
    // Correcto
    <ServiceCard titulo="Asesoría" descripcion="Texto" imagen="url" />

    // Incorrecto
    <ServiceCard t="Asesoría" d="Texto" i="url" />
    ```

   ## 5. Uso de Tailwind CSS
   Preferir clases utilitarias de Tailwind sobre CSS personalizado.

    ```jsx
    // Correcto
    <div className="flex items-center gap-4 p-6 rounded-xl shadow-md">

    // Incorrecto
    <div style={{ display: 'flex', padding: '24px' }}>
    ```

   ## 6. Manejo de estado
   Usar `useState` para estado local.
   Nombrar siempre el setter con el prefijo `set`.

    ```jsx
    const [enviado, setEnviado] = useState(false)
    const [errores, setErrores] = useState({})
    ```

   ## 7. Efectos secundarios
   Usar `useEffect` para consumo de APIs y suscripciones.
   Siempre incluir la función de limpieza cuando sea necesario.

    ```jsx
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    ```

   ## 8. Validación de formularios
   Siempre validar del lado del cliente antes de enviar.
   Mostrar mensajes de error claros y específicos por campo.

   ## 9. Optimización de imágenes
   Usar `loading="lazy"` en todas las imágenes que no son
   visibles al cargar.

    ```jsx
    <img src="foto.jpg" alt="descripción" loading="lazy" />
    ```

   ## 10. Accesibilidad
   Incluir `aria-label` en botones sin texto visible y
   `alt` en todas las imágenes.

    ```jsx
    <button aria-label="Volver al inicio de la página">↑</button>
    <img src="foto.jpg" alt="Equipo Centro de Negocios SERCOTEC" />
    ```

---

# DIAGRAMA DE ARQUITECTURA

```
Usuario (Navegador)
        ↓
    React App
        ↓
    App.jsx (React.lazy + Suspense para code splitting)
        ↓
    Navbar
    Nosotros
    Servicios → ServiceCard  ←→  json-server :3001/servicios
    Testimonios → Swiper.js
    FAQ                      ←→  json-server :3001/faq
    Contacto → Validación + Honeypot
    BotonArriba
```

---

# RETROSPECTIVA DEL PROYECTO

   ## ¿Qué funcionó bien?
   - La estructura de componentes reutilizables facilitó el desarrollo y el mantenimiento
   - Tailwind CSS agilizó el diseño responsive sin necesidad de escribir CSS personalizado
   - El carrusel de Swiper.js se integró fácilmente con React
   - El formulario de contacto quedó con validaciones robustas y protección contra bots
   - El CMS con json-server permite gestionar el contenido sin modificar el código fuente
   
   ## ¿Qué se puede mejorar?
   - El CMS local debería reemplazarse por un backend real (ej: Supabase o Firebase) para
        que el formulario envíe emails y el contenido persista
   - Los testimonios podrían también cargarse dinámicamente desde el CMS, como ya lo hacen
        Servicios y FAQ
   - Se podrían agregar animaciones de entrada (Intersection Observer) para las secciones
        al hacer scroll

   ## Plan de acción para la próxima iteración
   El plan de acciones consta de 5 pasos los cuales se organizarán de la siguiente manera:

   **Acción, responsable y prioridad**

   ### 1.
   - Acción: Migrar CMS local a Supabase para persistencia real
   - Responsable: Equipo completo
   - Prioridad: Alta

   ### 2.
   - Acción: Conectar formulario de contacto a servicio de email (EmailJS o similar)
   - Responsable: Equipo completo
   - Prioridad: Alta

   ### 3.
   - Acción: Cargar testimonios dinámicamente desde el CMS
   - Responsable: Equipo completo
   - Prioridad: Media

   ### 4.
   - Acción: Agregar animaciones de entrada con Intersection Observer
   - Responsable: Equipo completo
   - Prioridad: Baja

   ### 5.
   - Acción: Implementar tests unitarios con Vitest para componentes principales
   - Responsable: Equipo completo
   - Prioridad: Media

---

# CONCLUSIÓN

Este proyecto permitió aplicar de forma integrada los principales conceptos del desarrollo
frontend moderno: 
- Organización en componentes reutilizables con React 
- Consumo dinámico de APIs con `fetch` y `useEffect` 
- Optimización de rendimiento mediante code splitting con `React.lazy` 
- Buenas prácticas de accesibilidad siguiendo WCAG 2.1 
- Gestión del contenido a través de un CMS con json-server administrado con Postman.

El uso de Tailwind CSS y Swiper.js como herramientas externas integradas al framework
complementó la solución entregada al cliente.
