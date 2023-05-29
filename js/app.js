document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', () => {
        alert('this is awesome')
    })
})

let userNumber = 10
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    let value = document.getElementById('amount').value
    console.log(value)
})