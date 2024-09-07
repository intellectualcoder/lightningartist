

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

// Visitor Counter
let visitCount = localStorage.getItem('page_view');

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem('page_view', visitCount);
} else {
    visitCount = 1;
    localStorage.setItem('page_view', 1);
}

document.getElementById('count').innerText = visitCount;

// Fetch Visitor Location
fetch('https://ipinfo.io/json?token=YOUR_TOKEN') // Get your token from ipinfo.io
    .then(response => response.json())
    .then(data => {
        const locationInfo = `${data.city}, ${data.region}, ${data.country}`;
        document.getElementById('location').innerText = `Your Location: ${locationInfo}`;
    })
    .catch(error => {
        document.getElementById('location').innerText = 'Unable to detect location.';
    });
