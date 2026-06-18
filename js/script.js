console.log("Portfolio Loaded Successfully");

const cards =
    document.querySelectorAll(
        ".card,.skill-card"
    );

window.addEventListener(
    "scroll",
    () => {

        cards.forEach(card => {

            const top =
                card.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                card.classList.add("show");

            }

        });

    });

const themeBtn =
    document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});
window.scrollTo({
    top: 0,
    behavior: "smooth"
});

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");
            hamburger.innerHTML = "☰";

        });

    });

});
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        document.body.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

