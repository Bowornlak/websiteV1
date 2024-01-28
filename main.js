// script.js
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
    });

    window.addEventListener('click', function() {
        var dropdownContents = document.querySelectorAll('.dropdown-content');
        for (var i = 0; i < dropdownContents.length; i++) {
            dropdownContents[i].style.display = 'none';
        }
    });
});
