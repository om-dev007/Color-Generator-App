let bgColor = document.querySelector('#changeBg')
const startBtn = document.querySelector('.startbtn')
const stopBtn = document.querySelector('.stopbtn')
const codeDisplay = document.querySelector('.colorCode')

let intervalId;

function randomColor() {
    let color = "0123456789ABCDEF"
    let newColor = "#"
    for(let i=0; i<6; i++) {
        newColor += color[Math.floor(Math.random() * 16)]
    }
    codeDisplay.textContent = `This color is ${newColor}`
    console.log(newColor);
    return newColor
}

function timeChange() {
    bgColor.style.backgroundColor = randomColor()
}

startBtn.addEventListener('click', () => {
    intervalId = setInterval(timeChange, 1000)
    console.log('clicked start btn');
})

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId)
})