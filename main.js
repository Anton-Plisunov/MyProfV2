const readMore = () => {
  const dots = document.querySelector("#dots");
  const more = document.querySelector("#more");
  const btn = document.querySelector("#btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.textContent = "More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.textContent = "Clear";
    more.style.display = "inline";
  }
};
