var selectHombre = document.getElementById("estilosHombreSelect");
var selectMujer = document.getElementById("estilosMujerSelect");
var selectTodosEstilos = document.getElementById("todos")

var seccionHombres = document.getElementById("seccionHombres");
var seccionMujeres = document.getElementById("seccionMujer");

selectHombre.addEventListener("click", esconderMujeres)
selectMujer.addEventListener("click", esconderHombres)
selectTodosEstilos.addEventListener("click", mostrarTodos)

function esconderMujeres(){
    if(selectHombre.checked==true){
        seccionMujeres.hidden = true
        seccionHombres.hidden = false
        
    }
}

function esconderHombres(){
    if(selectMujer.checked==true){
        seccionMujeres.hidden = false
        seccionHombres.hidden = true
        
    }
}

function mostrarTodos(){
    if(selectTodosEstilos.checked==true){
        seccionMujeres.hidden = false
        seccionHombres.hidden = false
        
    }
}


