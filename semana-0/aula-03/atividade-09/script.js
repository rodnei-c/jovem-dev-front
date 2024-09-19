var qtdAluno = prompt("quantos alunos tem na sala? ");
const notas = [];
var nota;
var mediaAluno;
var soma;

function calcularMedia() {
    for(var j = 1; j <= notas.length; j++){
        soma += notas[j];
    }
    mediaAluno = soma/notas.length;

    return mediaAluno;
}

for(var i = 1; i <= qtdAluno; i++){

    nomeAluno = prompt("Nome do aluno: ");

    qtdNotas = Number(window.prompt("quantas notas ele possui? "));

    for(var j = 1; j <= qtdNotas; j++){

        nota = Number(prompt("nota do aluno: "));

        notas.push(nota);
        
    }

    
}

const alunos = {
    id: i,
    nome: nomeAluno,
    media: function() {
        return calcularMedia();
    }
}



// let func = (media) => {
    
// } 

// document.write(func);




// var valor = [];

// function add() {
//     inNota = Number(document.getElementById("inNota").value);

//     valor.push(inNota);
//     listaNota();
//     document.getElementById("inNota").value = ""
// }

// function listaNota() {
//     outResposta1 = document.getElementById("outResposta1");
//     outResposta1.textContent = "";
//     for (i = 0; i < valor.length; i++) {
//         outResposta1.textContent = outResposta1.textContent + valor[i]+",";
//     }
// }

// function calcular() {
//     outResposta2=document.getElementById("outResposta2");
//     var soma=0;
//     for(i=0;i<valor.length;i++) {
//         soma=soma+valor[i]
//     }
//     var media=soma/valor.length;
//     outResposta2.textContent="Média: "+media.toFixed(2);
// }

// var alunoNome, alunoNota, alunoMedia;

// function addAluno(){

//     var quantAluno = Number(document.getElementById("qtdAluno"));
//     var outResposta = document.getElementById("outResposta");

//     for(var i = 0; i < quantAluno; i++){

//         alunoNome = window.prompt("Nome do aluno: ");

//     }

//     outResposta.textContent = `Nome do aluno: ${alunoNome}`

//     // var quantAluno = Number(document.getElementById("qtdAluno"));
//     // var alunos = [{id, nome, notas:[], media}];
//     // var nota;
//     // var media;

//     // for(var i = 0; i < quantAluno; i++){

//     //     alunos.id = i;

//     //     alunos.nome = window.prompt("Nome do aluno: ");

//     //     qtdNotas = window.prompt("Quantas notas ele tem?");

//     //     for(var j = 1; j <= qtdNotas; j++){
//     //         nota = window.prompt(`Nota ${j}º: `);
//     //         alunos.notas = nota;
//     //     }
//     //     alunos.push(alunos.id,alunos.nome,alunos.notas);
//     // }

//     // var outResposta = document.getElementById("outResposta");
//     // outResposta.textContent = `Nome: ${alunos.nome}<br>Notas: ${alunos.notas}<br>`;
// }