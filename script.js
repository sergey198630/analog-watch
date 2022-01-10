window.addEventListener('load', ()=> {
    const sec = document.querySelector('.sec')
    const min = document.querySelector('.min')
    setInterval(fsec, 1000)
    setInterval(fmin, 1000*60)

    let secIndex = 0, minIndex = 0

    function fsec() {
        secIndex +=6
        sec.style.transform = `rotate(${secIndex}deg)`
        
    }

    function fmin(){
        minIndex +=6
        min.style.transform = `rotate(${minIndex}deg)`
    }
})