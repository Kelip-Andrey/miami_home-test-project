{
  
let modalWindow = document.createElement('div');
modalWindow.id = 'modalWindow';
document.body.append(modalWindow);

const images = document.querySelector('.gallery-content').querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', e => {
    modalWindow.classList.add('active');
    let img = document.createElement('img');
    img.src = image.src;
    modalWindow.append(img);
  })
})

modalWindow.addEventListener('click', e => {
  modalWindow.classList.remove('active');
  modalWindow.innerHTML = "";
})

console.dir(modalWindow);

}