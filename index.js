const header = document.querySelector('header')
const footer = document.querySelector('footer')
const main   = document.querySelector('main')
const headerHeight = header.offsetHeight
const footerHeight = footer.offsetHeight

function onResize(){
    const mainHeight = (window.innerHeight || document.documentElement.clientHeight) - headerHeight - footerHeight
    main.style.minHeight = mainHeight + 'px'
}

export default function(){
    window.addEventListener('resize', onResize)
    onResize()
}

