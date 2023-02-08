let countdown = 3;
  setInterval(function() {
    countdown--;
    document.querySelector("#countdown").innerHTML = countdown;
    if (countdown === 0) {
      window.location.href = "index.html";
    }
  }, 1000);

