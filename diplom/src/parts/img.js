function img() {
    let divImage = document.createElement('div'),
        imgPic = document.createElement('img'),
        zoom = document.getElementsByClassName('zoomIn'),
        zoomIn = document.querySelectorAll('.zoomIn > a'),
        works = document.querySelector('.overlay');

    divImage.classList.add('div_picture');
    imgPic.classList.add('div_picture_img');

    for (let i = 0; i < zoom.length; i++) {
        zoom[i].addEventListener('click', (event) => {
            event.preventDefault();
            divImage.style.display = 'block';
            works.style.cssText = `display: flex;
        justify-content: center; align-items: center;`;
            works.appendChild(divImage);
            divImage.appendChild(imgPic);
            for (let i = 0; i < zoomIn.length; i++) {
                zoomIn[i].getAttribute('href');
            }
            imgPic.setAttribute('src', zoomIn[i].href);
        });
    }

    works.addEventListener('click', (event) => {
        let target = event.target;
        if (target == works) {
            divImage.style.display = 'none';
            works.style.display = 'none';
        }
    });
}

module.exports = img;



