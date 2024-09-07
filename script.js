

document.getElementById('burger-menu').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});
// Visitor Counter using CountAPI for global count
fetch('https://api.countapi.xyz/hit/lightningartiststudio.com/visits')
    .then(response => response.json())
    .then(data => {
        document.getElementById('count').innerText = data.value;
    })
    .catch(error => {
        console.error('Error fetching the visitor count:', error);
    });

// Fetch Visitor Location
fetch('https://ipinfo.io/json?token=YOUR_ACTUAL_TOKEN') // Replace with your ipinfo.io token
    .then(response => response.json())
    .then(data => {
        const locationInfo = `${data.city}, ${data.region}, ${data.country}`;
        document.getElementById('location').innerText = `Your Location: ${locationInfo}`;
    })
    .catch(error => {
        document.getElementById('location').innerText = 'Unable to detect location.';
    });
