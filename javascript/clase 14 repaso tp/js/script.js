//obtener todos los elementos de la galeria 
const galeriaItem =document.querySelectorAll(".galeria-item");

//obtener el modal y la imagen que se mostrar en el mismo
const modal=document.getElementById("imagenModal");
const modalImg=document.getElementById("imgModal");

const closeBtn=document.querySelector(".close");

//funcion para abrir la imagen

galeriaItem.forEach(item=>{item.addEventListener("click",function(){modalImg.src=this.src;
    modal.style.display="flex";
})});

closeBtn.addEventListener("click",function(){modal.style.display="none"})