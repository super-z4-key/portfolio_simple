const liNavBar = document.querySelectorAll(".li-navbar");
const liBody = document.querySelectorAll(".li-body");
const bgOn = "#d7aa92";
const bgOff = "#e3cec6";

const clickButton = (params) => {
  if (params == params) {
    for (let i = 0; i < liNavBar.length; i++) {
      if (i == params) {
        liNavBar[i].style.backgroundColor = bgOn;
      } else {
        liNavBar[i].style.backgroundColor = bgOff;
      }
    }
    for (let i = 0; i < liBody.length; i++) {
      if (i == params) {
        liBody[i].style.display = "flex";
      } else {
        liBody[i].style.display = "none";
      }
    }
  }
};
