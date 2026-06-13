/*
 * Premium behavior for mockups. Plain JS, no dependencies.
 * Opt in with classes / data-attributes; everything degrades gracefully and
 * respects prefers-reduced-motion. Load with <script defer src="../scroll.js">.
 */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Scroll reveal: elements with .reveal-on-scroll fade+rise when in view. */
  const revealEls = document.querySelectorAll(".reveal-on-scroll");
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* Condensing header: toggles .scrolled on .topbar after some scroll. */
  const topbar = document.querySelector(".topbar");
  if (topbar) {
    const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Scroll progress bar (element with .scroll-progress, fixed at top). */
  const progress = document.querySelector(".scroll-progress");
  if (progress) {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      progress.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  if (reduce) return; /* The effects below are non-essential motion. */

  /* Magnetic buttons: [data-magnetic] nudges toward the cursor. */
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = 0.3;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = "translate(" + x + "px," + y + "px)";
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });

  /* Pointer tilt: [data-tilt] tilts toward the pointer. */
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    const max = 8;
    el.style.transformStyle = "preserve-3d";
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = "perspective(700px) rotateX(" + (-py * max) + "deg) rotateY(" + (px * max) + "deg)";
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });

  /* Count-up: [data-count="1234"] ticks from 0 when revealed. */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const animate = (el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = 1200;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => cio.observe(el));
  }

  /* Cursor glow: add data-cursor-glow to <body> (dark themes). */
  if (document.body.hasAttribute("data-cursor-glow") && window.matchMedia("(pointer:fine)").matches) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = "translate(" + (e.clientX - 200) + "px," + (e.clientY - 200) + "px)";
    }, { passive: true });
  }
})();
