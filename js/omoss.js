const readMore = document.querySelectorAll(".read-more");

readMore.forEach(function (readMore) {
    readMore.addEventListener("click", () => {
        readMore.classList.toggle("show");
    });
});
