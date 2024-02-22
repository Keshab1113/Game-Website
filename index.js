
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var scale = 1 - scrollPosition / 1000; // Adjust the divisor for the zoom effect

    // Limit the scale to a minimum value (e.g., 0.5)
    scale = Math.max(scale, 0.5);

    // Apply the zoom-out effect using CSS transform
    document.getElementById('myVideo').style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
});

// For Search Button

function openSearch() {
    document.getElementById("myOverlay").style.display = "flex";
    document.getElementById("searchIcon").style.display = "none";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("searchIcon").style.display = "block";
}
