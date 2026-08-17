(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Contact form -> mailto
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var body = "From: " + (document.getElementById("f-name") ? document.getElementById("f-name").value : "") + "\n" +
                  "Email: " + (document.getElementById("f-email") ? document.getElementById("f-email").value : "") + "\n\n" +
                  (document.getElementById("f-msg") ? document.getElementById("f-msg").value : "");

      var mailSubject = encodeURIComponent(document.getElementById("f-subject") ? document.getElementById("f-subject").value : "");
      var mailBody = encodeURIComponent(body);

      var href = "mailto:sales@lorkintech.com" +
        "?subject=" + mailSubject +
        "&body=" + mailBody;

      window.location.href = href;
    });
  }

  // Active nav highlight
  var path = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-links a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      links[i].classList.add("active");
    }
  }
})();