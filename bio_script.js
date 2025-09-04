document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const landingScreen = document.getElementById("landing-screen");
  const mainContent = document.getElementById("main-content");
  const music = document.getElementById("bg-music");

  // ===== Landing Screen Logic =====
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

  // ===== Custom Cursor + Particle Trail =====
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    // particle trail
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);

    particle.style.left = e.pageX + "px";
    particle.style.top = e.pageY + "px";

    setTimeout(() => {
      particle.remove();
    }, 1000);
  });

  // ===== Optional Click Pulse Effect =====
  document.addEventListener("click", (e) => {
    const pulse = document.createElement("div");
    pulse.classList.add("pulse");
    document.body.appendChild(pulse);

    pulse.style.left = e.pageX + "px";
    pulse.style.top = e.pageY + "px";

    setTimeout(() => {
      pulse.remove();
    }, 600);
  });
});
