// BUSCA OS PRODUTOS
function buscaProdutos (mostraBtDelete = false){ //parametro mostraBtDelete

    fetch('http://localhost:3000/produtos', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(resposta => resposta.json())
    .then(resposta => {

        document.querySelector('#listaProdutos').innerHTML = ''; //serve para limpar a pagina antes de carregar a atualização.


        for (let i = 0; i < resposta.length; i++) {

            const ul = document.createElement('ul');
            ul.classList.add('produto'); //classe criada
            // ul.id = resposta[i].id;

            if(resposta[i].atualizado){
                ul.style.color = 'blue';
            }
    
            const liId = document.createElement('li');
            liId.setAttribute('data-produto', 'id');
            liId.innerHTML = resposta[i].id;

            const liDescricao = document.createElement('li');
            liDescricao.setAttribute('data-produto', 'descricao');
            liDescricao.innerHTML = resposta[i].descricao;

            const liPreco = document.createElement('li');
            liPreco.setAttribute('data-produto', 'preco');
            liPreco.innerHTML = resposta[i].preco;

            ul.append(liId, liDescricao, liPreco)

            if (mostraBtDelete){ //parametro mostraBtDelete
            //botão
            const liDelete = document.createElement('li');
            const btDelete = document.createElement('button');
            btDelete.innerHTML = '❌';
            btDelete.value = resposta[i].id;
            btDelete.classList.add('delete-button'); // cria classe para usar no css
            // btDelete.style.color = 'red'; // da para estulizar pelo style.color
            
            const liCheck = document.createElement('li');
            const inputCheck = document.createElement('input');
            inputCheck.setAttribute('type','checkbox');
            inputCheck.setAttribute('id','');

            liCheck.append(inputCheck);

            ul.insertBefore(liCheck, liId);

            ul.appendChild(liDelete).appendChild(btDelete);
            //fim botão
        }

            document.querySelector('#listaProdutos').appendChild(ul);

        }

    });
}
    export { buscaProdutos }
