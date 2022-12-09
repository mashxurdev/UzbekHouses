export let changeColor = true;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 2000) {
    changeColor = false;
  }
});
