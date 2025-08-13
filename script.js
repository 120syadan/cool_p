//         // Mobile menu toggle
//         document.getElementById('mobile-menu-button').addEventListener('click', function () {
//             const menu = document.getElementById('mobile-menu');
//             menu.classList.toggle('hidden');
//         });

//         // Smooth scrolling for anchor links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();

//                 const targetId = this.getAttribute('href');
//                 const targetElement = document.querySelector(targetId);

//                 if (targetElement) {
//                     window.scrollTo({
//                         top: targetElement.offsetTop - 80,
//                         behavior: 'smooth'
//                     });

//                     // Close mobile menu if open
//                     document.getElementById('mobile-menu').classList.add('hidden');
//                 }
//             });
//         });

//         // Highlight active nav link on scroll
//         const sections = document.querySelectorAll('section');
//         const navLinks = document.querySelectorAll('.nav-link');

//         window.addEventListener('scroll', function () {
//             let current = '';

//             sections.forEach(section => {
//                 const sectionTop = section.offsetTop;
//                 const sectionHeight = section.clientHeight;

//                 if (pageYOffset >= (sectionTop - 100)) {
//                     current = section.getAttribute('id');
//                 }
//             });

//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if (link.getAttribute('href') === `#${current}`) {
//                     link.classList.add('active');
//                 }
//             });
//         });
        
//             const toggleBtn = document.getElementById("show-more-btn");
//                 const extra1 = document.getElementById("extra-project-1");
//                 const extra2 = document.getElementById("extra-project-2");

//                 toggleBtn.addEventListener("click", (e) => {
//                     e.preventDefault();
//                     const isHidden = extra1.classList.contains("hidden");
//                     extra1.classList.toggle("hidden");
//                     extra2.classList.toggle("hidden");
//                     toggleBtn.textContent = isHidden ? "Sembunyikan Proyek" : "Lihat Lebih Banyak Proyek";
//                 });

// yang ke 2
document.addEventListener("DOMContentLoaded", function () {
    // ==== Smooth Scroll untuk semua link internal ====
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Pastikan ini link internal
            if (targetId && targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // ==== Toggle Mobile Menu ====
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // ==== Fitur Lihat Lebih Banyak Skills ====
    const showMoreBtn = document.getElementById("show-more-btn");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const hiddenSkills = document.querySelectorAll(".extra-skill.hidden");
            hiddenSkills.forEach(skill => {
                skill.classList.remove("hidden");
                skill.classList.add("fade-in");
            });

            showMoreBtn.style.display = "none";
        });
    }
});
