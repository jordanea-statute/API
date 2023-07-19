import { buscaProdutos } from "./read-com-get.js";

document.querySelector('#btCadastrar').addEventListener('click', () =>{

    const dados ={
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value
    }

    fetch('http://localhost:3000/produtos',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => {
        if(resposta.ok){
            alert('Produto Cadastrado');
        }
    });

});

fetch('http://localhost:3000/produtos', {
    method: 'GET', 
    headers: {
        'content-type': 'application/json'
    }
})
    .then(resposta => resposta.json())
    .then(resposta => {

        for(let i = 0; i < resposta.length; i++){

            const ul = document.createElement('ul');
            
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;
          

            document.querySelector('#listaProdutos').appendChild(ul);

        }               
        
});
