document.addEventListener('DOMContentLoaded', function() {
    var dropdownElement = document.getElementById('navbarDropdown1');

    if (dropdownElement) {
        dropdownElement.onclick = function() {
            window.location.href = '/pages/book-publishing.html';
        };
    }
});