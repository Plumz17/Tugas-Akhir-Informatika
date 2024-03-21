const backToMenuBtn = document.getElementById("back-to-menu-btn");
            
backToMenuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "main.html";
});