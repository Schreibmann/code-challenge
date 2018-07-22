function main() {
  document.querySelectorAll(".wrapper>div").forEach(panelElement => {
    var panel = new Panel();
    panel.init(panelElement);
  });
}

function Panel() {
  this.init = function(el) {
    el.clicks = 0;
    el.addEventListener("click", function() {
      this.clicks++;
      console.log(this.className + " was clicked " + this.clicks + " times");
      var counter = document.querySelector("." + this.className + "-counter");
      counter.innerHTML = this.clicks;
    });
  };
}

window.onload = main;
