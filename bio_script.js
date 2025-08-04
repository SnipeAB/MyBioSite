document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const landingScreen = document.getElementById("landing-screen");
  const mainContent = document.getElementById("main-content");
  const music = document.getElementById("bg-music");

  enterBtn.addEventListener("click", () => {
    landingScreen.classList.add("opacity-0");
    landingScreen.classList.add("pointer-events-none");

    mainContent.classList.remove("opacity-0");
    mainContent.classList.remove("pointer-events-none");

    setTimeout(() => {
      landingScreen.style.display = "none";
      music.volume = 0.2; // adjust as needed
      music.play().catch(err => {
        console.warn("Autoplay blocked:", err);
      });
    }, 1000);
  });
});
