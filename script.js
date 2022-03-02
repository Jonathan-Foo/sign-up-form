const form = document.getElementsByTagName('form')[0];
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

// password.value = "testing"
// console.log(password.textContent)

form.addEventListener('submit', function(event) {
    if (confirmPassword.value !== password.value) {
        password.classList = 'error'
        confirmPassword.classList = 'error' 
        event.preventDefault();
    } else {
        window.location.reload();
        event.preventDefault();
    }
})