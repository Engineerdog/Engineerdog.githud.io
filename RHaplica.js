const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')
const thumbnails2 = document.querySelectorAll('.thumbnail2')


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
    })
})