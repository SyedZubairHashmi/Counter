var number = document.querySelector('span').innerHTML
console.log(number)
number++
console.log(number)

function plus(){
    number++
    console.log(number)
    document.querySelector('span').innerHTML = number
}

function minus(){
    number--
    console.log(number)
    document.querySelector('span').innerHTML = number
}
function reset(){
    number = 0
    document.querySelector('span').innerHTML = number
}