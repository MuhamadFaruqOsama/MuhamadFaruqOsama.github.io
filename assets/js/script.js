let partikel = document.getElementById("partikel");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  partikel.style.top = value * 0.8 + "px";
});

// register plugin gsap
gsap.registerPlugin(TextPlugin);

function aboutMe() {
  gsap.to("ul li a", { duration: 0.5, opacity: 0 });
  gsap.to("img.astronot", { duration: 0.5, opacity: 0 });
  gsap.from("img.astronot-modal", { duration: 1, opacity: 0, delay: 0.5 });
  gsap.to("p.aboutMe-modal", { duration: 2, delay: 1, text: `Hi welcome to my profile, My name is Muhamad Faruq Osama. I'm 19 years old and i'm student at SMK Negeri 1 Wonosobo...` });
}

function back() {
  gsap.to("ul li a", { duration: 0.5, opacity: "100%" });
  gsap.to("img.astronot", { duration: 0.5, opacity: "100%", delay: 0.5 });
}
