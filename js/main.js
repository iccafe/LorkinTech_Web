(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  // Contact form -> mailto
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("f-name");
      var email = document.getElementById("f-email");
      var subject = document.getElementById("f-subject");
      var msg = document.getElementById("f-msg");

      var body = "From: " + (name ? name.value : "") + "\n" +
                 "Email: " + (email ? email.value : "") + "\n\n" +
                 (msg ? msg.value : "");

      var mailSubject = encodeURIComponent(subject ? subject.value : "");
      var mailBody = encodeURIComponent(body);

      var lang = document.documentElement.lang || "zh-CN";
      var fallback = lang.startsWith("en") ?
        "" : "mailto:sales@lorkintech.com";

      var href = "mailto:sales@lorkintech.com" +
        "?subject=" + mailSubject +
        "&body=" + mailBody;

      window.location.href = href;
      if (fallback) window.location.href = fallback;
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