const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//SOUND

const soundButtons = document.querySelectorAll(".buttonSounds");

soundButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const audio = button.getElementsByTagName("audio")[0];
    stopAllSounds();
    const icons = button.getElementsByTagName("img")[0];
    if (icons.getAttribute("src") === "asset/img/mute.png") {
      icons.setAttribute("src", "asset/img/play.png");
      audio.play();
    } else {
      icons.setAttribute("src", "asset/img/mute.png");
      audio.pause();
    }
  });
});

function stopAllSounds() {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0; // Reset audio ke awal
  });
}
