let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    // PEGAR VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    // SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
        
        ++contador;

        let novoItem = `<div id=${contador} class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-radiobox-blank"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`;

        // ADICIONAR NOVO ITEM
        main.innerHTML += novoItem;

        // APAGAR CAMPO
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');


        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-radiobox-blank');
        icone.classList.add('mdi-checkbox-marked-circle');

        item.parentNode.appendChild(item);
    }else {
        item.classList.remove('clicado');


        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-checkbox-marked-circle');
        icone.classList.add('mdi-radiobox-blank');
    }
}

input.addEventListener('keyup', function (event) {
    // SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
