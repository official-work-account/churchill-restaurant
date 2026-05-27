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
});
