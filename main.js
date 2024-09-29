document.getElementById("loginButton").addEventListener("click", function () {
  const onlineId = document.getElementById("onlineIdInput").value;
  const password = document.getElementById("passwordInput").value;
  const image = document.getElementById("resizableImage");
  const loginBox = document.querySelector(".login-box");
  const navBar = document.querySelector(".navBar");
  const mainSection = document.querySelector(".main");

  if (onlineId === "" || password === "") {
    alert("Both fields are required");
  } else {
    image.classList.add("image-fullscreen");
    loginBox.classList.add("hidden");
      navBar.classList.add("hidden");
      
    setTimeout(function () {
        image.classList.remove("image-fullscreen");
    
      setTimeout(function () {

        mainSection.classList.add("fade-out");


        setTimeout(function () {
          window.location.href = "originalPage.html"; 
        }, 500); 
      }, 500); 
    }, 1000); 
  }
});
