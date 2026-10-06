const productos = [
  {
    id: 1,
    nombre: "Audifonos conduccion osea",
    descripcion: "Disfruta de tu música con total libertad: sonido increíble, comodidad y diseño de conducción ósea.",
    precio: 25000,
    imagen: "https://poseidonbogota.com/cdn/shop/files/audifonosdeconduccionoceaearcuff1_2e361da2-43b0-4bb1-916a-e4c2588d297f.jpg?v=1771957256"
  },
  {
    id: 2,
    nombre: "Audifonos diadema",
    descripcion: "Sumérgete en tu música favorita con estilo, potencia y comodidad, estés donde estés.",
    precio: 18000,
    imagen: "https://exitocol.vtexassets.com/arquivos/ids/24975222/audifonos-inalambricos-bluetooth-over-ear-diadema-estereo-p9.jpg?v=638639410644700000"
  },
  {
    id: 3,
    nombre: "PAudifonos Openmove ",
    descripcion: "Escucha lo que amas mientras te mantienes atento a tu entorno, con libertad, comodidad y tecnología de conducción ósea.",
    precio: 30000,
    imagen: "https://contents.mediadecathlon.com/p2237776/k$bece36835023cd74bb283e9db5f73aa2/audifonos-deportivos-shokz-openmove-gris-anteriormente-aftershokz.jpg"
  },
  {
    id: 4,
    nombre: "Audifonos Ultrapods",
    descripcion: " Lleva tu música contigo y disfruta cada momento con un estilo moderno, práctico y diferente.",
    precio: 18000,
    imagen: "https://smartjoys.co/wp-content/uploads/2025/09/Audifonos-Ultrapods-Pro.jpg"
  },
  {
    id: 5,
    nombre: "Audifonos manos libres",
    descripcion: "Que tu música te acompañe, no que te distraiga: sonido, libertad y estilo en un solo audífono.",
    precio: 22000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_788585-MLA87754923392_072025-O.webp"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
