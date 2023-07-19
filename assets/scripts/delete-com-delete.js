document.addEventListener('click', event => {
    if(event.target.classList.contains('delete-button')){

        fetch(`http://localhost:3000/produtos/${event.target.value}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resposta => {
                if(resposta.ok){
                    alert('Produto apagado!')
                    location.reload(); //JEITO PORCAO SERA MELHORADO PROMETO!
                }
            })
    }
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
            ul.classList.add('produto') /*criação class para usar no style.css*/
            
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;

            const liDelete = document.createElement('li');
            const btDelete = document.createElement('button');
            btDelete.innerHTML = '❌';
            btDelete.classList.add('delete-button'); // cria classe para usar no css
            // btDelete.style.color = 'red'; // da para estulizar pelo style.color
            btDelete.value = resposta[i].id;

            ul.appendChild(liDelete).appendChild(btDelete);
          

            document.querySelector('#listaProdutos').appendChild(ul);

        }                              
});

//xport {buscaProdutos} 