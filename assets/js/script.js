// sticky navbar
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var upBtn = document.getElementById("upBtn");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// active navbar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
      sec.classList.add("show-animate");
      sec.classList.add("bar-animate-active");
    } else {
      sec.classList.remove("show-animate");
      sec.classList.remove("bar-animate-active");
    }
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// menu icon
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// loading
let fadeTarget = document.querySelector(".loading-spin");

function hideLoading() {
  fadeTarget.style.display = "none";
}

// back btn
function goBack() {
  window.history.back();
}
// contact-me page
// let contactForm = document.getElementById("contact-me-form");
// let loadingForm = document.getElementById("loading-form");

// loadingForm.style.display = "none";

// contactForm.addEventListener("submit", function (e) {
//   loadingForm.display.style = "block";

//   e.preventDefault();

//   const url = e.target.action;
//   const formData = new formData(contactForm);

//   fetch(url, {
//     method: "POST",
//     body: formData,
//     mode: "no-cors",
//   })
//     .then(() => {
//       // url
//       loadingForm.display.style = "none";

//       window.location.href = "../../page/contact.me.page/thanks.html";
//     })
//     .catch((e) => alert("Eror occured"));
// });
