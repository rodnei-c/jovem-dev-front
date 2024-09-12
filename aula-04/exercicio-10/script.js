const lista = [];

function adicionar(){

    var tarefa = document.getElementById('tarefa').value;
    
    if(tarefa === ""){
        validaTarefa(tarefa);
    } else {
        lista.unshift(tarefa);
        listarTarefas();
        limpaLabel();
        contagemTarefas();
        document.getElementById('tarefa').value="";
    }
    
}

function contagemTarefas(){
    const contador = document.getElementById('quant-tarefa');
    contador.textContent = lista.length;
}

function listarTarefas(){
    const resposta = document.getElementById('tabela');
    var row = resposta.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '';
    cell2.innerHTML = '<input type="checkbox" id="conclusao">';
    cell3.textContent = lista.find(x => lista.lastIndexOf());
    cell4.innerHTML = '<input type="button" id="excluir" value="Excluir" onclick="excluir()">'

}

function excluir(){


}




function limpaLabel(){
    var valida = document.getElementById('valida-tarefa');

    valida.textContent = "";
}

function validaTarefa(tarefa){
    var valida = document.getElementById('valida-tarefa');

    valida.textContent = "Precisa adicionar uma tarefa";
    
}