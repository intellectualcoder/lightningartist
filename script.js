

document.getElementById('burger-menu').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});

<script>
    // Function to handle page transition
    document.querySelectorAll('a.page-transition').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent immediate navigation

            // Add the fade-out class to body
            document.body.classList.add('fade-out');

            // Wait for the transition to finish, then navigate
            setTimeout(function() {
                window.location.href = link.href;
            }, 500); // Match this delay with the CSS transition duration
        });
    });
</script>