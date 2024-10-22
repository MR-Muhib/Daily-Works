
const sidebar = document.getElementById("sidebar");
const togglebtn = document.getElementById("toggle-button");
togglebtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !togglebtn.contains(e.target))
    sidebar.classList.remove("active");
});
// ------------------End Toggle Sidebar-------------------->

let child = document.getElementsByTagName("section");


