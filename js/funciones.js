function ejercicio1() {
    console.log("Ejercicio 1");
    console.log("-----------");

    var variable_a = 33, variable_b = 77;
    var variable_resultado = variable_a + variable_b;

    console.log("El valor de variable_a es " + variable_a);
    console.log("El valor de variable_b es " + variable_b);
    console.log("El valor de variable_resultado es " + variable_resultado);
    console.log(" ");
    console.log("*****************************************");

}

function ejercicio2() {
    console.log("Ejercicio 2");
    console.log("-----------");

    var a = 10;
    var b = 15;
    var c = 25;
    var d = 30;
    var e = 35;

    console.log("El valor de la variable a es " + a);
    console.log("El valor de la variable b es " + b);
    console.log("El valor de la variable c es " + c);
    console.log("El valor de la variable d es " + d);
    console.log("El valor de la variable e es " + e);

    var promedio = (a + b + c + d + e) / 5;
    console.log("El promedio de a b c d e es " + promedio);

    console.log(" ");
    console.log("*****************************************");
}

function ejercicio3() {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;

    document.getElementById("resultado3").innerHTML = nota1 > nota2;

}

function ejercicio4() {
    var compra = document.getElementById("compra").value;
    var aPagar = 0;

    if (compra > 100) {
        aPagar = (parseFloat(compra) - (parseFloat(compra) * 0.15));
    } else {
        aPagar = parseFloat(compra);
    }

    document.getElementById("aPagar").value = aPagar.toFixed(2);
}

function ejercicio5() {
    var cantidad = parseFloat(document.getElementById("cantTickets").value);
    var valorTicket = 0;

    if (cantidad < 8) {
        valorTicket = 1.5;
    } else {
        valorTicket = 0.5;
    }

    document.getElementById("valorTicket").value = valorTicket;
    document.getElementById("aPagarCine").value = cantidad * valorTicket;
}

function ejercicio6() {
    var nota1 = document.getElementById("nota1Ej6").value;
    var nota2 = document.getElementById("nota2Ej6").value;

    if (nota1 == nota2) {
        document.getElementById("resultado6").innerHTML = "Nota1 y nota2 son iguales";
    } else if (nota1 > nota2) {
        document.getElementById("resultado6").innerHTML = "Nota1 es mayor";
    } else if (nota1 < nota2) {
        document.getElementById("resultado6").innerHTML = "Nota2 es mayor";
    }
}

function ejercicio7() {
    var calificacion = parseInt(document.getElementById("calificacion").value);

    if (calificacion < 0 || calificacion > 4) {
        alert("La calificación ingresada es inválida");
    } else {
        var respuesta;

        switch (calificacion) {
            case 0:
                respuesta = "mala";
                break;
            case 1:
                respuesta = "regular";
                break;
            case 2:
                respuesta = "buena";
                break;
            case 3:
                respuesta = "muy buena";
                break;
            case 4:
                respuesta = "excelente";
                break;
            }
        
        document.getElementById("resultado7").innerHTML= respuesta;
    }
}

function ejercicio8(){
    console.log("Ejercicio 8");
    console.log("-----------");

    var respuesta="";

    for(let i = 59; i >= 0; i--){
        console.log(i);
        respuesta+= i + "<br>";
    }

    document.getElementById("resultado8").innerHTML= respuesta;

    console.log(" ");
    console.log("*****************************************");
}