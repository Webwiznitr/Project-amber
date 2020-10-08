let darkflag = false;

// darkmode implementation
let home = document.getElementById("home");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let team = document.getElementById("team");
let contact = document.getElementById("contact");
let title = document.getElementById("home__title");
let darkmodebtn = document.getElementById("darkmodebtn");
let cards = document.getElementsByClassName("card-column");
let icons = document.getElementsByClassName("home__social-icon");
let cardinners = document.getElementsByClassName("card-inner");
let membericons = document.getElementsByClassName("mem_social-icon");
let inputs = document.getElementsByClassName("contact__input");

darkflag
    ? (darkmodebtn.innerHTML = "<i class='fas fa-sun' id='toogle'></i>")
    : (darkmodebtn.innerHTML = "<i class='fas fa-moon' id='toogle'></i>");

darkmodebtn.onclick = function () {
    if (darkflag) {
        lightmode();
    } else {
        darkmode();
    }
};

const lightmode = () => {
    darkflag = false;
    document.body.style.color = "#06101B";
    document.body.style.backgroundColor = "#fff";
    home.style.backgroundColor = "#fff";
    about.style.backgroundColor = "#06101B";
    projects.style.backgroundColor = "#fff";
    team.style.backgroundColor = "#06101B";
    contact.style.backgroundColor = "#fff";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "#fff";
        cardinners[i].style.boxShadow = "0px 1px 16px rgba(163, 80, 234, 0.25)";
        membericons[i].style.color = "#fff";
    }
    for (let i = 0; i < membericons.length; i++) {
        membericons[i].style.color = "#000";
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "#fff";
    }
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.color = "#000";
    }
    darkmodebtn.innerHTML = "<i class='fas fa-moon' id='toogle'></i>";
    toogle.style.color = "#fff";
    darkmodebtn.border = "1.5px solid #fff";
};

const darkmode = () => {
    darkflag = true;
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#222428";
    home.style.backgroundColor = "#222428";
    about.style.backgroundColor = "#1e2023";
    projects.style.backgroundColor = "#222428";
    team.style.backgroundColor = "#1e2023";
    contact.style.backgroundColor = "#222428";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "#383a3e";
        cardinners[i].style.boxShadow = "0px 1px 8px rgba(0, 0, 0, 0.25)";
        membericons[i].style.color = "#fff";
    }
    for (let i = 0; i < membericons.length; i++) {
        membericons[i].style.color = "#fff";
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "#383a3e";
    }
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.color = "#fff";
    }
    darkmodebtn.innerHTML = "<i class='fas fa-sun' id='toogle'></i>";
    toogle.style.color = "yellow";
    darkmodebtn.border = "1.5px solid yellow";
};

// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

// Active And Remove Menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    // Active one
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    // Remove Mobile Menu
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Animation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

/*if (darkflag) {
    console.log("dark"+darkflag);
    sr.reveal(".home__title__dark", {});
} else {
    console.log("dark"+darkflag);
    sr.reveal(".home__title", {});
}*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
