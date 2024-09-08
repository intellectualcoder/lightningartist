
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");

    burgerMenu.addEventListener("click", function() {
        // Toggle the 'active' class on the nav menu when the burger button is clicked
        navMenu.classList.toggle("active");
    });

    // Optionally close the menu if you click outside the nav area
    document.addEventListener("click", function(event) {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Back to Top Button Visibility on Scroll
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Scroll to Top on Button Click
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Burger Menu Toggle
});


const backToTopButton = document.getElementById('back-to-top');
    
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

// Visitor Counter using CountAPI for global count
//fetch('https://api.countapi.xyz/hit/lightningartiststudio.com/visits')
//    .then(response => response.json())
//    .then(data => {
//        document.getElementById('count').innerText = data.value;
//    })
//    .catch(error => {
//        console.error('Error fetching the visitor count:', error);
 //   });

// Fetch Visitor Location
//fetch('https://ipinfo.io/json?token=YOUR_ACTUAL_TOKEN') // Replace with your ipinfo.io token
//    .then(response => response.json())
//    .then(data => {
//        const locationInfo = `${data.city}, ${data.region}, ${data.country}`;
//        document.getElementById('location').innerText = `Your Location: ${locationInfo}`;
//    })
//    .catch(error => {
//        document.getElementById('location').innerText = 'Unable to detect location.';
//    });
