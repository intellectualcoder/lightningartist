document.addEventListener('DOMContentLoaded', function() {
    alert('Artist says: "Welcome to my Art page!"');
});

document.getElementById('burger-menu').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});
