function teste(event){

    const input = document.getElementById("nome");
    console.log(input);
    console.log(input.value);

    const labelTopo = document.getElementById("label-topo");
    console.log(labelTopo);

    const forms = document.getElementsByTagName("form");
    console.log(forms);

    const selector = document.querySelector('div');
    console.log(selector);

    const selectorAll = document.querySelectorAll('div');
    console.log(selectorAll);

    console.log(event);
    event.preventDefault();
}

function manipulando(event) {
    const labelTopo = document.getElementsByClassName('label-topo')[0];
    console.log(labelTopo);

    labelTopo = 'Hello World';
    labelTopo.innerHTML = '<a href="">Teste</a>';
    labelTopo.style.backgroundcolor = 'pink'; 

    event.preventDefault();
}

function atualizaLabelInput() {
    const input = document.getElementById('nome');
    const labelInput = document.getElementById('labelInput');

    labelInput.textContent = input.value;


    const divVazia = document.getElementById('divVazia');
    const minhaNovaLabel = document.createElement('label');
    console.log(minhaNovaLabel);
    minhaNovaLabel.textContent = input.value;

    divVazia.appendChild(divVazia);
}