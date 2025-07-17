result = document.getElementById('res')

const add = (u, v) => u + v
const minus = (u, v) => u - v
const multiply = (u, v) => u * v
const divide = (u, v) => u / v

const handleSubmit = (e) => {
    e.preventDefault()
    const form = document.getElementById('calculator')
    const numOne = form.elements['num1'].value
    const numTwo = form.elements['num2'].value
    const operator = form.elements['operator'].value

    if (operator === 'Add') {
        result.innerText = `Result: ${add(Number(numOne), Number(numTwo))}`
    } else if (operator === 'Minus') {
        result.innerText = `Result: ${minus(Number(numOne), Number(numTwo))}`
    } else if (operator === 'Multiply') {
        result.innerText = `Result: ${multiply(Number(numOne), Number(numTwo))}`
    } else if (operator === 'Divide') {
        result.innerText = `Result: ${divide(Number(numOne), Number(numTwo))}`
    } else {
        console.log('error')
    }
}