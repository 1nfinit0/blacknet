const element = document.getElementById("preloader");
const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const promo = document.getElementById("combo");
const lista = document.getElementById("lista");


promo.addEventListener("click", function() {
  window.scroll({
    top: 740,
    left: 0,
    behavior: 'smooth'
    });
});

lista.addEventListener("click", function() {
  window.scroll({
    top: 1690,
    left: 0,
    behavior: 'smooth'
    });
});

setTimeout(function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  header.style.display = 'block';
  main.style.display = 'block';
  footer.style.display = 'block';
}, 4500);

setTimeout(function(){
  element.remove();
}, 5000);

/*
Código del menú
*/

const files = [
  {   src: './1010/unidades/pechuga-parrillera-600x550.jpg',
      alt: 'No disponible',
      titulo: 'Pechuga Parrillera',
      price: 'S/. 40.00'
  },
  {   src: './1010/unidades/2.jpg',
      alt: 'No disponible',
      titulo: 'Pollo Brasa Don Beli con Papas',
      price: 'S/. 63.90'
  },
  {   src: './1010/unidades/3.jpg',
      alt: 'No disponible',
      titulo: 'Pollo Brasa DB con Papas y Ensalada',
      price: 'S/. 74.90'
  },
  {   src: './1010/unidades/4.jpg',
      alt: 'No disponible',
      titulo: 'Pollo Brasa DB con Acomp. y Ensalada',
      price: 'S/. 79.90'
  },
  {   src: './1010/unidades/5.jpg',
      alt: 'No disponible',
      titulo: '1/4 Brasa DB con Papas',
      price: 'S/. 23.90'
  },
  {   src: './1010/unidades/6.jpg',
      alt: 'No disponible',
      titulo: '1/4 Brasa DB con Papas y Ensalada',
      price: 'S/. 25.90'
  },
  {   src: './1010/unidades/7.jpg',
      alt: 'No disponible',
      titulo: '1/4 Brasa DB con Acomp. y Ensalada',
      price: 'S/. 27.90'
  },
  {   src: './1010/unidades/8.jpg',
      alt: 'No disponible',
      titulo: '1/2 Brasa DB con Papas',
      price: 'S/. 39.90'
  },
  {   src: './1010/unidades/9.jpg',
      alt: 'No disponible',
      titulo: '1/2 Brasa DB con Papas y Ensalada',
      price: 'S/. 44.90'
  },
  {   src: './1010/unidades/10.jpg',
      alt: 'No disponible',
      titulo: '1/2 Brasa DB con 2 Acomp. y Ensalada',
      price: 'S/. 47.90'
  },
  {   src: './1010/unidades/11.jpg',
      alt: 'No disponible',
      titulo: 'Pollo Brasa DB con 4 Acomp. Personal y Ensalada',
      price: 'S/. 84.90'
  },
  {   src: './1010/unidades/12.jpg',
      alt: 'No disponible',
      titulo: 'Pollo Brasa Don Beli',
      price: 'S/. 44.90'
  },
  {   src: './1010/unidades/13.jpg',
      alt: 'No disponible',
      titulo: 'Ensalada Cocida',
      price: 'S/. 17.90'
  },
  {   src: './1010/unidades/14.jpg',
      alt: 'No disponible',
      titulo: 'Ensalada Fresca',
      price: 'S/. 15.90'
  },
  {   src: './1010/unidades/15.jpg',
      alt: 'No disponible',
      titulo: 'Papas Crocantitas',
      price: 'S/. 9.90'
  },
  {   src: './1010/unidades/16.jpg',
      alt: 'No disponible',
      titulo: 'Papas del Caporal Personal',
      price: 'S/. 12.90'
  },
  {   src: './1010/unidades/17.jpg',
      alt: 'No disponible',
      titulo: 'Camotitos de la Abuelita Personal',
      price: 'S/. 12.90'
  },
  {   src: './1010/unidades/18.jpg',
      alt: 'No disponible',
      titulo: 'Arroz Chaufa Personal',
      price: 'S/. 9.90'
  },
  {   src: './1010/unidades/19.jpg',
      alt: 'No disponible',
      titulo: 'Arrocito de la Cacerola Personal',
      price: 'S/. 9.90'
  }
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const proyectos = document.querySelector('#proyectos');
const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};

const filtrar = () => {
  proyectos.innerHTML = '';
  const texto = formulario.value.toLowerCase();
          texto.split('').map( letra => acentos[letra] || letra).join('').toString();
  for(let file of files){
      let titulo = file.titulo.toLowerCase();
                  titulo = titulo.split('').map( letra => acentos[letra] || letra).join('').toString();
      if(titulo.indexOf(texto) !== -1){
          proyectos.innerHTML +="<div class='proyecto'><div class='servicio'><img src='"+file.src+"' alt='"+file.alt+"'></div>"+
                                      "<div class='descripcion'>"+
                                          "<div class='name'><h3>"+file.titulo+"</h3></div>"+
                                              "<div class='formatos'>"+
                                              "<div class='price'><p>"+file.price+"</p></div>"+
                                              "</div>"+
                                          "</div>"+
                                        "</div><hr>";

                                   ;
      }         
  }
  if (proyectos.innerHTML === ''){
      proyectos.innerHTML += `No se encontraron resultados`
  }

}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
filtrar();