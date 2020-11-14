document.addEventListener('scroll', (e) => {
    const h1 = document.querySelector('#text')
    // document.documentElement.scrollTop获取滚动条的位置
    // document.documentElement.scrollHeight获取浏览器所有内容高度
    // document.documentElement.clientHeight获取浏览器可视内容高度
    let scrolled = document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)

    h1.style.setProperty('--percentage', `${scrolled * 100}%`)
})