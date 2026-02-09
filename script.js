
document.addEventListener("DOMContentLoaded", function () {

  // 1. REGISTER GSAP Plugins safely
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 2. CUSTOM CURSOR
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  if (cursor && follower) {
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(follower, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.3 });
    });

    const links = document.querySelectorAll("a, button, .menu-btn");
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        gsap.to(follower, {
          scale: 3,
          borderColor: "transparent",
          backgroundColor: "rgba(255, 255, 255, 0.1)"
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(follower, {
          scale: 1,
          borderColor: "rgba(255, 255, 255, 0.5)",
          backgroundColor: "transparent"
        });
      });
    });
  }

  // 3. HERO ANIMATION
  if (window.gsap) {
    const tl = gsap.timeline();
    tl.to(".reveal-text", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out"
    });
  }

  // 4. MARQUEE SCROLL
  if (window.gsap && window.ScrollTrigger) {
    gsap.from(".marquee-container", {
      scrollTrigger: {
        trigger: ".marquee-container",
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
      x: -100,
    });
  }

  // 5. STATS COUNTER ANIMATION 
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray(".counter").forEach(counter => {
      const target = counter.getAttribute("data-target");
      const cont = { val: 0 };

      gsap.to(cont, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
        },
        onUpdate: () => {
          counter.innerText = Math.floor(cont.val) + "+";
        }
      });
    });
  }

  // 6. SWIPER GALLERY
  if (window.Swiper) {
    new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      speed: 800,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { spaceBetween: 10 },
        768: { spaceBetween: 30 }
      }
    });
  }

  // 7. MOBILE MENU TOGGLE
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("open");
      });
    });
  }
});