/* MarqueeTitle v4.0 | MIT License | git.io/vQZbs */
(function (c, a, m) {
  var title = (c || document.title) + " " + (a || "-") + " ";
  setInterval(function () {
    title = title.substring(1) + title.charAt(0);
    document.title = title;
  }, m || 300);
})(
  /* Tab Text */ "Vimukthi Malinda | Portfolio",
  /* Title Repeat Separator */ "-",
  /* Scroll Speed (in milleseconds) */ 300
);

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
