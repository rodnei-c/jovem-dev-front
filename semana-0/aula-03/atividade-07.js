// const aula = "Aula";
// const front = "Frontend";

// document.write(`${aula} de ${front}<br>`);

// var charArray = aula.substring(0, 2);
// document.write(charArray);



function printString(){
    var string1 = document.getElementById("string-1").value;
    var string2 = document.getElementById("string-2").value;

    var outResposta = document.getElementById("outResposta");

    stringCompleta = `${string1} de ${string2}`; 
    
    outResposta.textContent = stringCompleta;
}