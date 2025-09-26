// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const closeMenu = document.getElementById("closeMenu");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links ul li a");

  // Helper function to close the mobile menu
  function closeMobileMenu() {
    navLinks.classList.remove("active");
    menuIcon.setAttribute("aria-expanded", "false");
    navLinks.setAttribute("aria-hidden", "true");
  }

  // Open mobile menu
  menuIcon.addEventListener("click", function () {
    navLinks.classList.add("active");
    menuIcon.setAttribute("aria-expanded", "true");
    navLinks.setAttribute("aria-hidden", "false");
  });

  // Close mobile menu
  closeMenu.addEventListener("click", function () {
    closeMobileMenu();
  });

  // Close mobile menu when clicking on a nav item
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  // Close mobile menu when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // Initialize Owl Carousel for events
  $(".event-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "var(--shadow-medium)";
      navbar.style.padding = "10px 0";
    } else {
      navbar.style.boxShadow = "var(--shadow-light)";
      navbar.style.padding = "15px 0";
    }
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For now, let's just show an alert
      alert(
        `Thanks ${name}! Your message has been received. We'll get back to you soon at ${email}.`
      );

      // Reset the form
      contactForm.reset();
    });
  }

  // Animation on scroll
  function revealOnScroll() {
    const elements = document.querySelectorAll(
      ".team-member, .event-card, .event-item, .stat"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Initial call to revealOnScroll
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Call once when page loads
});
