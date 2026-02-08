document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const navbar = document.getElementById("navbar");
    const icon = darkModeToggle.querySelector("i");

        //dark mode
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "enabled") {
        body.classList.add("dark-mode");
        navbar.classList.add("dark-mode");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        navbar.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Update active link on scroll
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const updateActiveLink = () => {
        let currentSection = "home";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            }
        });
    };

    const handleClick = (event) => {
        navLinks.forEach((link) => link.classList.remove("active"));
        event.target.classList.add("active");

        const targetSectionId = event.target.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
        event.preventDefault();
    };

    navLinks.forEach((link) => link.addEventListener("click", handleClick));
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
    AOS.init();

    // Popup Logic
    const popup = document.getElementById("portfolio-popup");
    const yesBtn = document.getElementById("popup-yes");
    const noBtn = document.getElementById("popup-no");

    // Show popup after a short delay (e.g., 1 second)
    setTimeout(() => {
        popup.classList.add("show");
    }, 1000);

    yesBtn.addEventListener("click", () => {
        window.location.href = "https://bhawrasanjeev.github.io/PORTFOLIO_2.0/"; 
    });

    noBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
