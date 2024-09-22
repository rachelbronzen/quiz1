//element
const backToTopButton = document.getElementById("backToTop");

//nunjukin buttonnya
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } 
    else {
        backToTopButton.style.display = "none";
    }
};

//scroll atas
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
