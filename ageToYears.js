let input = document.querySelector('input')
let button = document.querySelector('button')
let display = document.querySelector('h1')

button.addEventListener('click', ()=>{
ageToDays(input.value)
})

function ageToDays(age) {
    ageInDays = age*365
    console.log(ageInDays)
    display.innerText = 'You are ' +ageInDays + ' days old.'
}

