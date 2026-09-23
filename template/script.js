/* ============================================================
   AI Builders Club — one-page club site
   No dependencies. Three jobs: mobile nav, smooth scroll, reveal.
   Everything motion-related respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  function setMenu(open) {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      setMenu(!links.classList.contains("open"));
    });

    // Close after choosing a link.
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMenu(false);
    });

    // Escape closes the menu and returns focus to the button.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Reset if the viewport grows past the hamburger breakpoint while open.
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Smooth scroll with sticky-nav offset ---------- */
  var header = document.querySelector(".site-header");

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
      // Keep the URL and keyboard focus in sync with where we scrolled.
      if (history.pushState) history.pushState(null, "", id);
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -5% 0px" });
    reveals.forEach(function (el) { observer.observe(el); });

    // Fail-safe: nothing may stay hidden. Background tabs freeze transitions,
    // so force everything visible after a short grace period and on tab return.
    var forceReveal = function () {
      reveals.forEach(function (el) {
        if (getComputedStyle(el).opacity !== "1") {
          el.style.transition = "none";
          el.classList.add("is-visible");
          void el.offsetWidth;
          el.style.transition = "";
        }
      });
    };
    setTimeout(forceReveal, 1500);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) forceReveal();
    });
  }
})();
