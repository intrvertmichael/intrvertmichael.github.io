const el = {
  body: document.querySelector("body"),
  navBtn: document.querySelector(".nav-btn"),
  nav: document.querySelector("nav"),
  main: document.querySelector("main")
}

el.navBtn.addEventListener('click', ()=>{
  el.body.classList.toggle("dark");
  el.nav.classList.toggle("hidden");
  el.main.classList.toggle("hidden");
});
