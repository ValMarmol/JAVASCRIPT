<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Tipos de datos JS</title>
    <script>
        // Declaración de variables.
        var suma = 9+10;
        console.log(suma);

        // Tipo de dato entero.
        var entero = 9;
        console.log(entero);

        // Concatenación para mejor presentación.
        console.log("Tipo de dato entero: " + entero);

        // Tipo de datos flotante.
        var flotante = 5.34;
        console.log("Valor del dato flotante: " + flotante);

        // Tipo de cadena (string) se utilizan las "" o las ''.
        var cadena = "Esto es JavaString";
        console.log("Tipo de dato string: " + cadena);

        var num_string1='20';
        var num_string2='21';

        console.log("Cadena dos números: " + num_string1 + num_string2);

        // Tipos de datos Booleanos solo puede contener
        // verdadero (true) o Falso (false) o 1 y 0

        var boolFalse = false;
        var boolTrue = true;
        console.log("Valor de tipo booleano: " + boolFalse);
        console.log("Valor de tipo booleano: " + boolTrue);

        // Operador unario (Typeof)
        console.log("Operador unario");
        console.log(typeof num_string1);
        console.log(typeof cadena);
        console.log(typeof true);

        // Operadores de comparación
        console.log(typeof num_string1 === num_string2); // retornará false.
        console.log(typeof num_string1 !== num_string2); // retornará true.
        console.log(typeof num_string1 < num_string2); // retornará true.
        console.log(typeof num_string1 > num_string2); // retornará false.
        console.log(typeof num_string1 <= num_string2); // retornará true.
        console.log(typeof num_string1 >= num_string2); // retornará false.


        // Operadores ternarios
        console.log( true ? 2 : 1);
        console.log( false ? 2 : 1);

    </script>
</head>
<body>
    <script>
        // Estructuras condicionales.
        var semaforo = "amarillo";

        if(semaforo === "verde")
        alert ("El semaforo esta e verde");
        else if(semaforo === "rojo")
        alert ("El semaforo esta en rojo");
        else if(semaforo === "amarillo")
        alert ("El semaforo esta en amarillo")
        else
        alert("El semaforo esta apagado");
    </script>
</body>
