document.addEventListener('scroll', (e) => {
    const h1 = document.querySelector('#text')
    let scrolled = document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)

    h1.style.setProperty('--percentage', `${scrolled * 100}%`)
})