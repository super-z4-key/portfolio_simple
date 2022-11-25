const liNavBar = document.querySelectorAll(".li-navbar");
const liBody = document.querySelectorAll(".li-body");
const clickButton = (params) => {
  if (params == params) {
    for (let i = 0; i < liNavBar.length; i++) {
      if (i == params) {
        liNavBar[i].style.backgroundColor = "#d7aa92";
        liBody[i].style.display = "flex";
      } else {
        liNavBar[i].style.backgroundColor = "#e3cec6";
        liBody[i].style.display = "none";
      }
    }
  }
};
