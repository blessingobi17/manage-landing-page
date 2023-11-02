const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "block") {
    navList.style.display = "none";
    hamburger.src = "images/icon-hamburger.svg";
  } else {
    navList.style.display = "block";
    hamburger.src = "images/icon-close.svg";
  }
});

const anishaPagination = document.querySelector(".anisha-pagination");

anishaPagination.addEventListener("click", () => {
  const anishaCard = document.querySelector(".anisha-card");
  const aliCard = document.querySelector(".ali-card");
  const richardCard = document.querySelector(".richard-card");

  anishaCard.style.display = "block";
  anishaPagination.style.background = "hsl(12, 88%, 59%)";
  aliCard.style.display = "none";
  aliPagination.style.background = "none";
  richardCard.style.display = "none";
  richardPagination.style.background = "none";
});

const aliPagination = document.querySelector(".ali-pagination");

aliPagination.addEventListener("click", () => {
  const anishaCard = document.querySelector(".anisha-card");
  const aliCard = document.querySelector(".ali-card");
  const richardCard = document.querySelector(".richard-card");

  aliCard.style.display = "block";
  aliPagination.style.background = "hsl(12, 88%, 59%)";
  anishaCard.style.display = "none";
  anishaPagination.style.background = "none";
  richardCard.style.display = "none";
  richardPagination.style.background = "none";
});

const richardPagination = document.querySelector(".richard-pagination");

richardPagination.addEventListener("click", () => {
  const anishaCard = document.querySelector(".anisha-card");
  const aliCard = document.querySelector(".ali-card");
  const richardCard = document.querySelector(".richard-card");

  richardCard.style.display = "block";
  richardPagination.style.background = "hsl(12, 88%, 59%)";
  anishaCard.style.display = "none";
  anishaPagination.style.background = "none";
  aliCard.style.display = "none";
  aliPagination.style.background = "none";
});

function validate() {
  const invalidMail = "please insert a valid email";
  const email = document.form.email.value;
  const at = email.indexOf("@");
  const dot = email.lastIndexOf(".");

  if (email == "") {
    document.querySelector(".input-err").innerHTML = "Email field is empty";
    return false;
  }

  if (at < 1 || dot - at < 2) {
    document.querySelector(".input-err").innerHTML = invalidMail;
    return false;
  } else {
    document.querySelector(".input-err").style.display = "none";
  }
}
