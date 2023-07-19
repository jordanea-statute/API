function toggleGif(){
    const toggleGif = document.querySelector('#gif');
    //toggle siginifica alterna
    if(toggleGif.hasAttribute('disabled')){
        toggleGif.removeAttribute('disabled');
        botao.innerHTML = 'Remover gif';
   
    } else {
        toggleGif.setAttribute('disabled','');/*setAttribute define nome e valor do atributo*/
        botao.innerHTML = 'Aplicar gif';
        
    }
}
// document.querySelector('#botao') da para usar as duas opçoes (querySelector que usa o # ou getElementById),uma ou outra. 
const botao = document.querySelector('#botao');
botao.addEventListener('click', toggleGif);


const requisicao = new Request('http://localhost:3000/produtos');

fetch(requisicao)
    .then(resposta => resposta.json())
    .then(resposta => {
        
        for(let i = 0; i < 3; i++){

            let linha = `<li>${resposta[i].id}</li>`;
            linha += `<li>${resposta[i].descricao}</li>`;
            linha += `<li>${resposta[i].preco}</li>`;

            const ul = document.createElement("ul");

            document.querySelector(`#resposta`).appendChild(ul).innerHTML = linha;

        }
});
document.querySelector('[type=button]').addEventListener('click',() =>{

document.querySelector("#gif").setAttribute('src','https://media.tenor.com/XWr6vfqH7WEAAAAC/tentando-n%C3%A3o-rir-risada.gif');

});