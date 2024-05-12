// Find themeButton on the page
var themeButton = document.querySelector('.theme-button');

// If theme button is found on load, add listener. Else (ie if it's added post-load), use on-click
if (themeButton) {
    themeButton.addEventListener('click',()=> {
        toggleTheme()
    })
} else {
    document.addEventListener('click', function(event) {
        // Check if the clicked element has the class 'theme-button'
        if (event.target.classList.contains('theme-button')) {
            toggleTheme();
        }
    });
}

// Variables for theme iteration
var bodyDiv = document.querySelector('body');
var themeArray = ["light-theme", "dark-theme", "green-theme", "blue-theme"];
var themeImgArray = ["/images/homepage-sun.png", "/images/footer-moon.png", "/images/footer-tree2.png", "/images/footer-wave.png"];
let themeInt = parseInt(window.localStorage.getItem("themeInt"));   // Pull array index from session storage; initializes as "empty" ie 0.

// Function to update body class based on current index.
function toggleTheme(){
    // Rotate theme array index first
    themeInt++ ; 
    themeInt = themeInt%themeArray.length;
    window.localStorage.setItem("themeInt", themeInt);

    // Then set the theme
    setTheme();
}

// Function to set the page theme whenever called, based on locally stored theme integer
function setTheme() {
    // Find the current theme integer
    let loadThemeInt = window.localStorage.getItem("themeInt");
    // Update the footer image
    if (document.getElementById("footer-img")) {
        document.getElementById("footer-img") .src=themeImgArray[loadThemeInt];
    } 

    // Update the css class
    bodyDiv.classList='';       // Clear current classes
    bodyDiv.classList.add(themeArray[loadThemeInt]);
}

window.onload= setTheme();

// Update theme and footer image on page load
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('/footer.html', 'footer');
})
    
// Loads html into target ID element
function loadHTML(url, target) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(target).innerHTML = html;
            setTheme();
        })
        .catch(error => {
            // console.error('There was a problem with the fetch operation:', error);
        });
}