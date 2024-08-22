let isDark = false;
let year = new Date().getFullYear();

const footer = document.querySelector(".footer");
const newP = document.createElement("p");
newP.classList.add("footer-text");
newP.innerHTML = `@${year} Tasneem Hannah Manga`;
footer.appendChild(newP);

function changeTheme() {
  isDark = !isDark;

  if (isDark === true) {
    document.body.style.backgroundImage = "url('images/Dark-backgroound.svg')";
    document.querySelectorAll(".theme-text").forEach((text) => {
      text.style.color = "white";
    });
    document.querySelector(".toggle-button").style.backgroundColor = "white";
    document.querySelector(".slider").style.backgroundColor = "black";
    document.querySelector(".slider").style.marginLeft = "32px";
    document.querySelector(".banner-text").style.color = "#69FFBC";
  } else {
    document.body.style.backgroundImage = "url('images/Light-background.svg')";
    document.querySelectorAll(".theme-text").forEach((text) => {
      text.style.color = "black";
    });
    document.querySelector(".slider").style.backgroundColor = "white";
    document.querySelector(".toggle-button").style.backgroundColor = "black";
    document.querySelector(".slider").style.marginLeft = "2px";
    document.querySelector(".banner-text").style.color = "#004b22";
  }
}
