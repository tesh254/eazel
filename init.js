window.onload = () => {
  window.addEventListener("resize", () => {
    window.eazel.config.width = window.innerWidth;
    window.eazel.config.height = window.innerHeight;
  });

  const canvas = document.getElementById("canvas");

  canvas.width = window.innerWidth || window.eazel.config.width;
  canvas.height = window.innerHeight || window.eazel.config.height;

  canvas.style.background = "#FAD6A5";
};

window.onclose = () => {
  window.removeEventListener("resize", () => {
    window.eazel.config.width = window.innerWidth;
    window.eazel.config.height = window.innerHeight;
  });
};
