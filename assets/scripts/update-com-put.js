
//DESAFIO 1- CLICK NO PRODUTO PARA PREENCHER O FORMULARIO DE ATUALIZAÇÃO AUTOMATICAMENTE.

import { buscaProdutos } from "./read-com-get.js";
buscaProdutos();

document.querySelector('#listaProdutos').addEventListener('click', event => {
    //console.log(event.target);

    if (event.target.closest('ul').classList.contains('produto')) {
        //console.log(event.target);

        const elementoBase = event.target.closest('ul');

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto ="id"]').innerHTML;
        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto ="descricao"]').innerHTML;
        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto ="preco"]').innerHTML;
    }
        verificaInputsPreenchidos();
});

//DESAFIO 2- PARA habilitar o botao type reset .

function verificaInputsPreenchidos() {

    const id = document.querySelector('input#id').value !== "";
    const descricao = document.querySelector('input#descricao').value !== "";
    const preco = document.querySelector('input#preco').value !== "";

    if (id || descricao || preco) {
        document.querySelector('button#btCancelar').removeAttribute('disabled');
        

    } else {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
        
    }

//desafio 3 para que o botao Atualizar fique ativo apenas se o input id estiver preenchido    
    if (id){
        document.querySelector('button#btAtualizar').removeAttribute('disabled');

    } else {
        document.querySelector('button#btAtualizar').setAttribute('disabled','');
    }
}

//COMPLEMENTO DESAFIO 2: DESABILITA O BOTÃO NO RESET DO FORMULARIO
        document.querySelector('form').addEventListener('reset', () => {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');

});

//VERIFICA OS CAMPOS DO FORMULARIO NA DIGITAÇÃO MANUAL
        document.querySelector('form').addEventListener('input', verificaInputsPreenchidos);

//ATUALIZA OS PRODUTOS   
        document.querySelector('#btAtualizar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
        'atualizado': true
    }
    console.log(JSON.stringify(dados))

    const id = document.querySelector('input#id').value;


    fetch(`http://localhost:3000/produtos/${id}`, { //chama o parametro com o ${}, {} chaves em ingles = curly braces
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => {
            if (resposta.ok) {
                alert('Produto Atualizado');
                buscaProdutos();
            }
        });

});


