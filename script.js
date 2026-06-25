let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function toggleCarrito(){
document.getElementById("carrito").classList.toggle("activo");
}

function agregarCarrito(nombre, precio){
carrito.push({nombre, precio});
guardar();
render();
}

function render(){

let cont = document.getElementById("itemsCarrito");
if(!cont) return;

cont.innerHTML = "";

let total = 0;

carrito.forEach((item, i)=>{

total += item.precio;

cont.innerHTML += `
<div class="item-carrito">
<span>${item.nombre}</span>
<span>$${item.precio}</span>
<button onclick="eliminar(${i})">❌</button>
</div>
`;

});

let t = document.getElementById("total");
if(t) t.innerText = total;

let c = document.getElementById("contadorCarrito");
if(c) c.innerText = carrito.length;

}

function eliminar(i){
carrito.splice(i,1);
guardar();
render();
}

function guardar(){
localStorage.setItem("carrito", JSON.stringify(carrito));
}

function suscribir(){
let email = document.getElementById("email");
let msg = document.getElementById("mensaje");

if(email.value.includes("@")){
msg.innerText = "Suscrito 💖";
}else{
msg.innerText = "Correo inválido";
}
}

render();
