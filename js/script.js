const mrRobot = document.querySelector('.mrRobot')
const obstaculo = document.querySelector('.obstaculo')

console.log(mrRobot);
const jump = ()=>{
    mrRobot.classList.add('jump')
    setTimeout(()=>{
        mrRobot.classList.remove('jump')
    },500)
}

const loop =setInterval(() => {
    const obstaculoPosition = obstaculo.offsetLeft
    const mrRobotPosition = +window.getComputedStyle(mrRobot).bottom
    .replace('px', '')
    if(obstaculoPosition <= 120 && pipePosition > 0 && mrRobotPosition<80){
        obstaculo.style.animation = 'none'
        obstaculo.style.bottom = `${obstaculo}px`
        mrRobot.src = 'css/sprites/death/death.gif'
    }
}, 10);




document.addEventListener('keydown', jump)

