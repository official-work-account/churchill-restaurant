document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.pause();
    });

    video.addEventListener("mouseleave", () => {
      video.play();
    });
  });

  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    margin: 10,
    nav: true,
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
