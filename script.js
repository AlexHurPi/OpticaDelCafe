/* =========================================
   DATOS
   ========================================= */
const productos = [];
for (let i = 1; i <= 50; i++) {
    productos.push({
        img: `images/monturas/Montura${i}.png`,
        titulo: 'Montura ' + i,
        desc: '',        
        precio: ''
    });
}

const gafasSol = [];
const A = 'Oakley'; const B = 'Ray-Ban';
const titulosGafas = [A, A, A, A, B, B, B, A, A, A, A, A, A, A];

for (let i = 1; i <= 14; i++) {
    gafasSol.push({
        img: `images/gafasDeSol/gafas${i}.png`,
        titulo: titulosGafas[i - 1] || 'Gafa de Sol',
        desc: '',
        precio: ''
    });
}

/* =========================================
   FUNCIÓN DE PINTADO
   ========================================= */
function pintarHTML(lista, contenedorID) {
    const contenedor = document.getElementById(contenedorID);
    if (!contenedor) return; // Protección por si no existe el ID

    lista.forEach(item => {
        const articulo = document.createElement('article');
        articulo.className = 'gallery-item';

        // NOTA: Quitamos target="_blank" para evitar que abra pestaña nueva si falla el JS
        // Ponemos dimensiones iniciales arbitrarias (800x800) para que PhotoSwipe arranque
        // El script del HTML corregirá el tamaño real después.
        articulo.innerHTML = `
            <a href="${item.img}" 
               data-pswp-width="800" 
               data-pswp-height="800" 
               class="pswp-link">
                <img src="${item.img}" alt="${item.titulo}" class="img-zoomable">
            </a>
            <h3>${item.titulo}</h3>
            <p>${item.desc || ''}</p>
            <span class="price">${item.precio}</span>
        `;
        contenedor.appendChild(articulo);
    });
}

// 1. Pintamos el HTML inmediatamente
pintarHTML(productos, 'contenedor-monturas');
pintarHTML(gafasSol, 'contenedor-gafas');

/* =========================================
   INICIALIZACIÓN SEGURA DE PHOTOSWIPE
   ========================================= */
// Esta función intenta iniciar las galerías
function activarLibreria() {
    if (window.iniciarGaleria) {
        window.iniciarGaleria('contenedor-monturas');
        window.iniciarGaleria('contenedor-gafas');
        console.log("PhotoSwipe iniciado correctamente");
    } else {
        // Si la librería aún no carga, esperamos el evento
        window.addEventListener('PhotoSwipeReady', () => {
            window.iniciarGaleria('contenedor-monturas');
            window.iniciarGaleria('contenedor-gafas');
            console.log("PhotoSwipe iniciado tras espera");
        });
    }
}

activarLibreria();

