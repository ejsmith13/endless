const startBtn = document.getElementById("start_btn");
const repoBtn = document.getElementById("repo_btn");
const closeBtn = document.getElementById("close_btn");
const modal = document.getElementById("modal");

const popUp = () => {
  modal.style.display = "block";
};
const repo = () => {
  window.location.href = "https://github.com/ejsmith13/endless";
};
const close = () => {
  modal.style.display = "none";
};

startBtn.addEventListener("click", popUp);
repoBtn.addEventListener("click", repo);
closeBtn.addEventListener("click", close);
