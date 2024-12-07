document.getElementById("login-form").addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const rememberMe = document.getElementById('remember-me').ariaChecked

    if (rememberMe) {
        localStorage.setItem('rememberEmail', email)
    } else {
        localStorage.removeItem('rememberEmail')
    }

    console.log('login attempt', { email, password, rememberMe })
})

window.onload = () => {
    const rememberEmail = localStorage.getItem('rememberEmail')
    if (rememberEmail) {
        document.getElementById('email').value = rememberEmail
        document.getElementById('remember').checked = true;
    }
}