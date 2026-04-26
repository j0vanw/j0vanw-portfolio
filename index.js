const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active")
            });

            const id = entry.target.getAttribute("id");

            document 
                .querySelector(`nav a[href="#${id}"]`)
                .classList.add("active");
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => {
    observer.observe(section);
});





function showPopup() {
    document.getElementById("popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
window.onload = showPopup;

window.onclick = function(e) {
    const popup = document.getElementById("popup");
    if (e.target === popup) {
        popup.style.display = "none";
    }
}