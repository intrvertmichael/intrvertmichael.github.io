

const moreAbout = document.querySelector('.more-about')
const lessAbout = document.querySelector('.less-about')
const about = document.querySelector('.about')

moreAbout.addEventListener('click', () => {
    about.classList.remove('hide')
    moreAbout.classList.add('hide')
})

lessAbout.addEventListener('click', () => {
    about.classList.add('hide')
    moreAbout.classList.remove('hide')
})