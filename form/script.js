const btn = document.querySelector('#submitBtn')

function btnClick (event) {
    document.querySelector('#message').innerHTML = "Success!"
    event.preventDefault()
}

btn.addEventListener('click', btnClick)