document.addEventListener("DOMContentLoaded", () => {
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
});
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
});
