
const boxNav = document.createElement('nav');
boxNav.classList.add('boxNav');

const boxUl = document.createElement('ul');
boxUl.classList.add('boxUl');

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


document.querySelector('header').appendChild(boxNav).appendChild(boxUl);
document.querySelector('ul').appendChild(document.createElement('li')).appendChild(home);
document.querySelector('ul').appendChild(document.createElement('li')).appendChild(creatPost);
document.querySelector('ul').appendChild(document.createElement('li')).appendChild(readGet);
document.querySelector('ul').appendChild(document.createElement('li')).appendChild(updatePut); 
document.querySelector('ul').appendChild(document.createElement('li')).appendChild(deleteDel); 