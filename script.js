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
   FUNCIÓN DE PINTADO INTELIGENTE
   ========================================= */
function pintarHTML(lista, contenedorID) {
    const contenedor = document.getElementById(contenedorID);
    
    // Si no encuentra el contenedor, sale para no dar error
    if (!contenedor) {
        console.error("No se encontró el contenedor: " + contenedorID);
        return; 
    }

    lista.forEach(item => {
        const articulo = document.createElement('article');
        articulo.className = 'gallery-item';

        // Preparamos el texto del título (Alt)
        const altTexto = `${item.titulo} ${item.precio ? '- ' + item.precio : ''}`;
        
        // Creamos el HTML interno
        articulo.innerHTML = `
            <a href="${item.img}" 
               data-pswp-width="800" 
               data-pswp-height="800" 
               class="pswp-link">
                <img src="${item.img}" alt="${item.titulo} ${item.precio ? ' - ' + item.precio : ''}" class="img-zoomable">
            </a>
            <h3>${item.titulo}</h3>
            <p>${item.desc || ''}</p>
            <span class="price">${item.precio}</span>
        `;
        
        contenedor.appendChild(articulo);

        // --- TRUCO DE PRE-CARGA (Solución al salto) ---
        // Creamos una imagen virtual para leer el tamaño real en segundo plano
        const imgVirtual = new Image();
        imgVirtual.src = item.img;
        
        imgVirtual.onload = () => {
            // Cuando cargue, actualizamos los datos del enlace <a>
            const enlace = articulo.querySelector('a.pswp-link');
            if(enlace) {
                enlace.setAttribute('data-pswp-width', imgVirtual.width);
                enlace.setAttribute('data-pswp-height', imgVirtual.height);
            }
        };
    });
}

// 1. Pintamos el HTML inmediatamente
// Asegúrate de que estos IDs existan en tu index.html
pintarHTML(productos, 'contenedor-monturas');
pintarHTML(gafasSol, 'contenedor-gafas');

/* =========================================
   INICIALIZACIÓN SEGURA DE PHOTOSWIPE
   ========================================= */
function activarLibreria() {
    // Si la función ya existe (porque el módulo cargó rápido), la usamos
    if (window.iniciarGaleria) {
        window.iniciarGaleria('contenedor-monturas');
        window.iniciarGaleria('contenedor-gafas');
    } else {
        // Si no, esperamos a que el módulo avise que está listo
        window.addEventListener('PhotoSwipeReady', () => {
            window.iniciarGaleria('contenedor-monturas');
            window.iniciarGaleria('contenedor-gafas');
        });
    }
}

activarLibreria();
