const mrRobot = document.querySelector('.mrRobot')
console.log(mrRobot);
const jump = ()=>{
    mrRobot.classList.add('jump')
    setTimeout(()=>{
        mrRobot.classList.remove('jump')
    },500)
}
document.addEventListener('keydown', jump)