(function () {
  var STORAGE_KEY = "color-mode";

  var current = function () {
    return document.documentElement.getAttribute("data-theme") || "dark";
  };

  var label = function (button) {
    var next = current() === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", "Switch to " + next + " mode");
    button.setAttribute("title", "Switch to " + next + " mode");
  };

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("color-mode-toggle");
    if (!button) return;
    label(button);
    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      label(button);
    });
  });

  /* Publication filters */
  document.addEventListener("DOMContentLoaded", function () {
    var chips = document.querySelectorAll("[data-pub-filter]");
    if (!chips.length) return;
    var items = document.querySelectorAll("[data-pub-type]");
    var groups = document.querySelectorAll("[data-pub-group]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-pub-filter");
        chips.forEach(function (c) { c.classList.toggle("is-active", c === chip); });
        items.forEach(function (it) {
          it.hidden = !(f === "all" || it.getAttribute("data-pub-type") === f);
        });
        groups.forEach(function (g) {
          g.hidden = !g.querySelector("[data-pub-type]:not([hidden])");
        });
      });
    });
  });

  /* Reveal-on-scroll */
  document.addEventListener("DOMContentLoaded", function () {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  });
})();
