function changeImage(imageId) {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => image.style.display = 'none');
  
    const image = document.getElementById(imageId);
    image.style.display = 'block';
  
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.toggle('active', button.dataset.image === imageId));
}

