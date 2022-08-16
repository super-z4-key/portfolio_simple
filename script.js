const liNavBar = document.querySelectorAll(".li-navbar");
const liBody = document.querySelectorAll(".li-body");
/////////#//////////#////////////#///////////
const bgActive = "#dfdf90";
const bgNonActive = "#72dbc8";
/////////#//////////#////////////#///////////
/////////#//////////#////////////#///////////
/////////#//////////#////////////#///////////
/////////#//////////#////////////#///////////
function home() {
  for (let i = 0; i < liNavBar.length; i++) {
    if (i == 0) {
      liNavBar[i].style.backgroundColor = bgActive;
    } else {
      liNavBar[i].style.backgroundColor = bgNonActive;
    }
  }

  for (let i = 0; i < liBody.length; i++) {
    if (i == 0) {
      liBody[i].style.display = "flex";
    } else {
      liBody[i].style.display = "none";
    }
  }
}

function about() {
  for (let i = 0; i < liNavBar.length; i++) {
    if (i == 1) {
      liNavBar[i].style.backgroundColor = bgActive;
    } else {
      liNavBar[i].style.backgroundColor = bgNonActive;
    }
  }

  for (let i = 0; i < liBody.length; i++) {
    if (i == 1) {
      liBody[i].style.display = "block";
    } else {
      liBody[i].style.display = "none";
    }
  }
}

function skill() {
  for (let i = 0; i < liNavBar.length; i++) {
    if (i == 2) {
      liNavBar[i].style.backgroundColor = bgActive;
    } else {
      liNavBar[i].style.backgroundColor = bgNonActive;
    }
  }

  for (let i = 0; i < liBody.length; i++) {
    if (i == 2) {
      liBody[i].style.display = "block";
    } else {
      liBody[i].style.display = "none";
    }
  }
}

function project() {
  for (let i = 0; i < liNavBar.length; i++) {
    if (i == 3) {
      liNavBar[i].style.backgroundColor = bgActive;
    } else {
      liNavBar[i].style.backgroundColor = bgNonActive;
    }
  }

  for (let i = 0; i < liBody.length; i++) {
    if (i == 3) {
      liBody[i].style.display = "block";
    } else {
      liBody[i].style.display = "none";
    }
  }
}

function contact() {
  for (let i = 0; i < liNavBar.length; i++) {
    if (i == 4) {
      liNavBar[i].style.backgroundColor = bgActive;
    } else {
      liNavBar[i].style.backgroundColor = bgNonActive;
    }
  }

  for (let i = 0; i < liBody.length; i++) {
    if (i == 4) {
      liBody[i].style.display = "block";
    } else {
      liBody[i].style.display = "none";
    }
  }
}
//////////////#////////////////#//////////////////
////////////////#////////////#////////////////////
//////////////////LEARN MORE//////////////////////
////////////////#////////////#////////////////////
//////////////#///////////////#///////////////////
function learnMore() {
  for (let i = 0; i < liNavBar.length; i++) {
    if (i == 1) {
      liNavBar[i].style.backgroundColor = bgActive;
    } else {
      liNavBar[i].style.backgroundColor = bgNonActive;
    }
  }

  for (let i = 0; i < liBody.length; i++) {
    if (i == 1) {
      liBody[i].style.display = "block";
    } else {
      liBody[i].style.display = "none";
    }
  }
}
