
const home = document.createElement('a');
home.href = './index.html';
home.innerHTML = 'Home';

const creatPost =document.createElement('a');
creatPost.href = './create-com-post.html';
creatPost.innerHTML = 'Post';

const readGet = document.createElement('a');
readGet.href = './read-com-get.html';
readGet.innerHTML = 'Get';

const updatePut = document.createElement('a');
updatePut.href = './update-com-put.html';
updatePut.innerHTML = 'Put';

const deleteDel = document.createElement('a');
deleteDel.href = './delete-com-delete.html';
deleteDel.innerHTML = 'Delete';


document.querySelector('header').append(home, creatPost, readGet, updatePut, deleteDel,);
