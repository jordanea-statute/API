
const home = document.createElement('a');
home.href = './index.html';

const creatPost =document.createElement('a');
creatPost.href = './create-com-post.html';

const readGet = document.createElement('a');
readGet.href = './read-com-get.html';

const updatePut = document.createElement('a');
updatePut.href = './update-com-put.html';

const deleteDel = document.createElement('a');
deleteDel.href = './delete-com-delete.html';

const pageDinamica = document.createElement('a');
pageDinamica.href = './pagina-dinamica.html';

document.head.append(home, creatPost, readGet, updatePut, deleteDel, pageDinamica);
