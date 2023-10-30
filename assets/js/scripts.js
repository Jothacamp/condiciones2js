function verificar() { 
    var imagen1 = parseInt(document.getElementById("sticker1").value) || 0; // parseInt convierte un string en un número entero
    var imagen2 = parseInt(document.getElementById("sticker2").value) || 0; // || significa O
    var imagen3 = parseInt(document.getElementById("sticker3").value) || 0;

    var suma = imagen1 + imagen2 + imagen3; //Suma de todos
    var resultado = document.getElementById("resultado");
    
    if (suma <= 10) { //<=10
        resultado.textContent = "Llevas " + suma + " stickers";
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
}

