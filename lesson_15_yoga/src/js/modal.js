function modal() {
    //Modal

    let more = document.querySelector('.more'),
        description = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.classList.add('more-splash');
    });

    close.addEventListener('click', () => {
        overlay.style.display = '';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    description.forEach(function(item) {
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            this.classList.add('more-splash');
        })
    });
}

module.exports = modal;

