// var modal = document.getElementById('modal');

// document.getElementById('modalBtn').addEventListener('click', function () {
//     openModal();
// });

// window.onclick = function (event) {
//     if (event.target == modal) {
//         closeModal();
//     }
// }

// function openModal() {
//     modal.style.display = 'block';
// }

// function closeModal() {
//     modal.style.animation = 'slideUp 0.5s ease';
//     setTimeout(function () {
//         modal.style.display = 'none';
//         modal.style.animation = '';
//     }, 500);
// }


// var loginForm = document.getElementById('loginForm');
// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     var usernameInput = document.getElementById('loguser');
//     var passwordInput = document.getElementById('logpass');

//     var username = usernameInput.value;
//     var password = passwordInput.value;

//     if (username === 'bx' && password === 'kerbyhxq') {
//         alert('Login successful');
//         usernameInput.value = '';
//         passwordInput.value = '';

//         closeModal();
//     }
//     else {
//         alert('Invalid username or password');
//     }
// });