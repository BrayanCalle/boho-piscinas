function mostrar(){
    document.getElementsByClassName("categoria-aparece")[0].classList.add("show");
    document.getElementsByClassName("categoria-aparece")[1].classList.add("show");
    document.getElementsByClassName("categoria-aparece")[2].classList.add("show");
}

function nomostrar(){
    document.getElementsByClassName("categoria-aparece")[0].classList.remove("show");
    document.getElementsByClassName("categoria-aparece")[1].classList.remove("show");
    document.getElementsByClassName("categoria-aparece")[2].classList.remove("show");
}

document.getElementById("categorias-footer").addEventListener("mouseover", function(){
    mostrar();
})

document.getElementById("categorias-footer").addEventListener("mouseleave", function(){
    nomostrar();
})


function mostrarservicios(){
    var services = document.getElementsByClassName("servicio-aparece");
    for(var i = 0, len= services.length; i < len; i++){
        services[i].classList.add("show");
    }
}

function nomostrarservicios(){
    var services = document.getElementsByClassName("servicio-aparece");
    for(var i = 0, len= services.length; i < len; i++){
        services[i].classList.remove("show");
    }
}

document.getElementById("servicios-footer").addEventListener("mouseover", function(){
    mostrarservicios();
})

document.getElementById("servicios-footer").addEventListener("mouseleave", function(){
    nomostrarservicios();
})