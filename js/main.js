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
      if (e.target.closest(".sub-nav")) return;
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active nav highlight (also works in subdirectory & submenu)
  var seg = window.location.pathname.split("/");
  var path = seg[seg.length - 1] || "index.html";
  var file = path.split("?")[0].split("#")[0];
  var dir = seg[seg.length - 2] || "";
  document.querySelectorAll(".nav-links").forEach(function (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      var href = (link.getAttribute("href") || "").split("?")[0].split("#")[0];
      if (href === file || (file === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  });
  // Highlight top-level section when inside a subdirectory
  if (dir === "solutions") {
    document.querySelectorAll(".nav-links a[href$='solutions.html']").forEach(function (l) {
      l.classList.add("active");
    });
  }
  if (dir === "products") {
    document.querySelectorAll(".nav-links a[href$='products.html']").forEach(function (l) {
      l.classList.add("active");
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

  // Product module groups: collapse/expand
  var groups = [].slice.call(document.querySelectorAll(".module-group"));
  if (groups.length) {
    var setGroup = function (group, open) {
      group.classList.toggle("open", open);
      var label = group.querySelector(".cat-label");
      if (label) label.setAttribute("aria-expanded", open ? "true" : "false");
    };

    groups.forEach(function (group) {
      var label = group.querySelector(".cat-label");
      if (label) {
        label.addEventListener("click", function () {
          setGroup(group, !group.classList.contains("open"));
        });
      }
    });

    var expandAll = document.querySelector(".cat-expand");
    var collapseAll = document.querySelector(".cat-collapse");
    if (expandAll) expandAll.addEventListener("click", function () {
      groups.forEach(function (g) { setGroup(g, true); });
    });
    if (collapseAll) collapseAll.addEventListener("click", function () {
      groups.forEach(function (g) { setGroup(g, false); });
    });

    // Index anchors: open the target group before jumping
    [].slice.call(document.querySelectorAll(".cat-index a")).forEach(function (a) {
      a.addEventListener("click", function () {
        var id = a.getAttribute("href");
        if (id && id.charAt(0) === "#") {
          var target = document.querySelector(id);
          if (target) setGroup(target, true);
        }
      });
    });
  }
})();