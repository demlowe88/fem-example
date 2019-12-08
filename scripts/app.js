let result = []
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const display = document.querySelector('.display')
const clear = document.querySelector('clear')
const btn = document.querySelectorAll('.btn')
const divide = document.querySelector('.divide')
const times = document.querySelector('.times')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const del = document.querySelector('.del')
const clr = document.querySelector('.clear')
const equals = document.querySelector('.equals')

const handleDisplay = () => {
    if (result.length > 0) {
        display.innerText = result.join('')
    } else {
        display.innerText = 0
    }
}

btn.forEach((bt) => {
    bt.addEventListener('click', (e) => {
        if (nums.includes(e.target.innerText)) {
            result.push(e.target.innerText)
            handleDisplay()
            console.log(result)
        }
    })
})

divide.addEventListener('click', (e) => {
    result.push('/')
    display.innerText = 0
})

times.addEventListener('click', (e) => {
    result.push('*')
    display.innerText = 0
})

minus.addEventListener('click', (e) => {
    result.push('-')
    display.innerText = 0
})

plus.addEventListener('click', (e) => {
    result.push('+')
    display.innerText = 0
})

del.addEventListener('click', (e) => {
    result.pop()
    handleDisplay()
})

clr.addEventListener('click', (e) => {
    result = []
    handleDisplay()
})

equals.addEventListener('click', (e) => {
    let answer = eval(result.join(''))
    display.innerText = answer
})

handleDisplay()