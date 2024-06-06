document.addEventListener('DOMContentLoaded', function() {
    var dropdownElement = document.getElementById('navbarDropdown1');

    if (dropdownElement) {
        dropdownElement.onclick = function() {
            window.location.href = '/pages/book-publishing.html';
        };
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdownElement2 = document.getElementById('navbarDropdown3');

    if (dropdownElement2) {
        dropdownElement2.onclick = function() {
            window.location.href = '/pages/cover-design.html';
        };
    }
});
