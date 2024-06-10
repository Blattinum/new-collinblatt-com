document.querySelectorAll(".content :not(.no-fav) a[href^='http']").forEach(function(el) {
    var img = document.createElement('img');
    var faviconPath = "https://" + el.hostname + "/" + "favicon.ico";
    img.src = faviconPath;
    img.style = "width: 16px; margin-right: 0.5rem;";
    console.log(faviconPath);

    
    console.log(el.hostname);
    el.parentNode.insertBefore(img, el);
});