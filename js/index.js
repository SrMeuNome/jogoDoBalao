var pts = 0

const initBalao = () => {
    let gameScreen = document.getElementById('gameScreen')
    let balao = document.createElement('div')
    let reflexo = document.createElement('div')
    let corda = document.createElement('img')
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let x = Math.floor(Math.random() * window.innerWidth) * 0.85
    let y = window.innerHeight//Math.floor(Math.random() * window.innerHeight) * 0.85
    balao.className = "balao"
    balao.setAttribute("style", "background-color: rgb(" + r + "," + g + "," + b + ", 0.8); left: " + x + "px" + "; top: " + y + "px")
    balao.setAttribute("onclick", "estourarBalao(this)")

    reflexo.className = 'reflexoBalao'
    balao.appendChild(reflexo)

    corda.className = 'corda'
    corda.setAttribute("src", "./img/corda.gif")
    balao.appendChild(corda)

    gameScreen.appendChild(balao)
}

const gameStart = () => {
    setInterval(initBalao, 1000)
    setInterval(() => {
        let baloes = document.getElementsByClassName('balao')
        for (let i = 0; i < baloes.length; i++) {
            upBalao(baloes[i])
        }
    }, 10)
}

const upBalao = (object) => {
    let gameScreen = document.getElementById('gameScreen')
    let y = parseInt(object.style.top.substring(0, object.style.top.length - 2))
    let newY = y - 1
    let newYStr = newY + "px"

    //Trocando a posição dos balões
    object.style.top = newYStr

    //Estourar balões que passaram do limite superior da tela
    if (newY < -200) {
        gameScreen.removeChild(object)
    }
}

const estourarBalao = (object) => {
    let gameScreen = document.getElementById('gameScreen')
    gameScreen.removeChild(object)
    countPts()
}

const countPts = () => {
    let ptsHTML = document.getElementById('pts')
    pts += 1
    ptsHTML.innerHTML = "Balões estourados: " + pts
}