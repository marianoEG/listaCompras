let botonMas = document.getElementById('botonaco')
let lista = document.getElementById('lista')
let ventanaNuevoProd = document.getElementById('agregar')
let iconos = document.getElementsByClassName('iconito')
let botonAdd = document.getElementById('botonAgregarFinal')
let cardItem = document.getElementById('cardItem')
let listaVacia = document.getElementById('listaVacia')

let listaItems = ''

let titulox = document.getElementById('titulo')
let descripcionx = document.getElementById('descripcion')
let categoriax = document.getElementById('tipoProducto')

botonMas.addEventListener('click',nuevoProducto)
botonAdd.addEventListener('click',agregarProducto)

function nuevoProducto(){
    ocultar(lista)
    ocultar(botonMas)
    mostrar(ventanaNuevoProd)
}

function ocultar(elemento){
    elemento.style.display = "none"
}

function mostrar(elemento){
    elemento.style.display = "block"
}

function agregarProducto(){
    let titulo = document.getElementById('titulo').value
    let categoria = document.getElementById('tipoProducto').value
    let descripcion = document.getElementById('descripcion').value
    listaItems += `<li class="item"><img src="${categoria}" alt=""><h1>${titulo}</h1><p>${descripcion}</p><button>X</button><h2>></h2></li>`
    lista.innerHTML = listaItems
    ocultar(listaVacia)
    ocultar(ventanaNuevoProd)
    mostrar(lista)
    mostrar(botonMas)
    titulox.value = ''
    descripcionx.value = ''
    categoriax.value = 'Categoria'
}

document.addEventListener('click', function(e){
    
    if (e.target.localName == 'li'){
        
        e.target.classList.add('cardItem')
        e.target.classList.remove('item')
        ocultar(botonMas)
    }
    
    if (e.target.localName == 'h2'){
        e.path[1].classList.remove('item')
        e.path[1].classList.add('cardItem')
        ocultar(botonMas)
        console.log(e.path[1].nodeName)
    }

    if (e.path[1].localName == 'li' && e.target.localName == 'button'){
        e.path[1].classList.add('item')
        e.path[1].classList.remove('cardItem')
        mostrar(botonMas)
    }
    console.log (e)
})