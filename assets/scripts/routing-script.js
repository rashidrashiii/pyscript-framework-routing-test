var isProduction = true;
const initialURL = window.location.href;
var routeBaseUrl = isProduction ? initialURL : '';

// Function to load HTML file based on URL parameter
function loadPage(page) {
    // Load the specified HTML file
    fetch(`components/${page}.html`) // Assuming components folder is in the same directory as index.html
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading content: ', error));
}

// Function to navigate to a specific page when button is clicked
function navigateToPage(page) {
    // Update the URL with the page parameter
    window.history.pushState({}, routeBaseUrl, `/${page}`);
    // Load the page content
    loadPage(page);
}

// Function to load HTML file based on URL parameter
function loadPageFromURL() {
    // Get the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    console.log('initialURL-initialURL',initialURL);
    const page = urlParams.get('page');
    console.log('page-page', page);
    console.log('routeBaseUrl',routeBaseUrl);
    window.history.pushState({}, routeBaseUrl, `/${page}`);
    if (page) {
        // Load the specified HTML file
        loadPage(page);
    }
}

// Call the function when the page loads
window.onload = loadPageFromURL;
// Listen for changes in the URL
window.addEventListener('popstate', loadPageFromURL);
