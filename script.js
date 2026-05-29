// ============================================
// Navigation
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-link');

function updateNav() {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinkItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================================
// Smooth scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// ============================================
// Scroll reveal (staggered)
// ============================================
const revealSelectors = [
  '.animate-item',
  '.section-header',
  '.skill-category',
  '.project-card',
  '.about-text',
  '.stats-grid',
  '.stat-card',
  '.skill-tag',
  '.animate-target',
  '.animate-on-scroll'
].join(',');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const parent = entry.target.parentElement;
    if (parent) {
      const siblingIndex = Array.from(parent.children).indexOf(entry.target);
      entry.target.style.transitionDelay = `${Math.max(siblingIndex, 0) * 0.1}s`;
    }

    entry.target.classList.add('revealed', 'visible');
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll(revealSelectors).forEach(el => {
  if (el.closest('.hero')) return;
  if (el.classList.contains('stats-grid')) return;
  el.classList.add('reveal-init');
  revealObserver.observe(el);
});

function revealInViewport() {
  document.querySelectorAll('.reveal-init:not(.revealed)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      el.classList.add('revealed', 'visible');
      revealObserver.unobserve(el);
    }
  });
}

window.addEventListener('load', revealInViewport);
window.addEventListener('scroll', revealInViewport, { passive: true });
setTimeout(revealInViewport, 150);

// ============================================
// Stat counter animation
// ============================================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  const suffix = element.dataset.suffix || '+';

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = `${target}${suffix}`;
      clearInterval(timer);
    } else {
      element.textContent = `${Math.floor(current)}${suffix}`;
    }
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const text = entry.target.textContent.trim();
    const match = text.match(/(\d+)\+/);
    if (match) {
      entry.target.dataset.suffix = '+';
      animateCounter(entry.target, parseInt(match[1], 10));
    }

    statsObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(num => {
  if (/\d+\+/.test(num.textContent)) {
    statsObserver.observe(num);
  }
});

// ============================================
// Hero parallax
// ============================================
const heroContent = document.querySelector('.hero-content');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroContent && !prefersReducedMotion) {
  function updateHeroParallax() {
    const scrolled = window.pageYOffset;
    if (scrolled < 10) {
      heroContent.style.transform = '';
      heroContent.style.opacity = '';
      return;
    }
    if (scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
      heroContent.style.opacity = String(Math.max(0.4, 1 - scrolled / (window.innerHeight * 0.8)));
    }
  }

  window.addEventListener('scroll', updateHeroParallax, { passive: true });
  updateHeroParallax();
}

// ============================================
// Carousel
// ============================================
document.querySelectorAll('.project-carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = carousel.querySelectorAll('.carousel-image');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const indicatorsContainer = carousel.querySelector('.carousel-indicators');

  let currentIndex = 0;

  images.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    images.forEach((img, index) => {
      img.classList.toggle('is-active', index === currentIndex);
    });
    indicatorsContainer.querySelectorAll('.carousel-indicator').forEach((ind, index) => {
      ind.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  updateCarousel();

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
  });

  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  }, { passive: true });

  images.forEach((img, index) => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(carousel.dataset.project, index);
    });
  });
});

// ============================================
// Lightbox
// ============================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentLightboxProject = null;
let currentLightboxIndex = 0;

function openLightbox(project, imageIndex) {
  currentLightboxProject = project;
  currentLightboxIndex = imageIndex;
  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const carousel = document.querySelector(`.project-carousel[data-project="${currentLightboxProject}"]`);
  const images = carousel.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  lightboxImage.src = images[currentLightboxIndex].src;
  lightboxImage.alt = images[currentLightboxIndex].alt;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${totalImages}`;
}

function nextLightboxImage() {
  const carousel = document.querySelector(`.project-carousel[data-project="${currentLightboxProject}"]`);
  const images = carousel.querySelectorAll('.carousel-image');
  currentLightboxIndex = (currentLightboxIndex + 1) % images.length;
  updateLightboxImage();
}

function prevLightboxImage() {
  const carousel = document.querySelector(`.project-carousel[data-project="${currentLightboxProject}"]`);
  const images = carousel.querySelectorAll('.carousel-image');
  currentLightboxIndex = (currentLightboxIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevLightboxImage);
lightboxNext.addEventListener('click', nextLightboxImage);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevLightboxImage();
  if (e.key === 'ArrowRight') nextLightboxImage();
});

// ============================================
// Canvas Particles Animation
// ============================================
class ParticlesAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.hero = document.querySelector('.hero');
    if (!this.canvas || !this.hero) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 80;
    this.connectionDistance = 150;
    this.mouseDistance = 200;
    this.mouse = { x: null, y: null };
    this.animationId = null;

    this.init();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    const start = () => {
      this.resize();
      if (this.canvas.width > 0 && this.canvas.height > 0) {
        this.createParticles();
      }
    };
    start();
    requestAnimationFrame(start);
    window.addEventListener('load', start);
  }

  resize() {
    const rect = this.hero.getBoundingClientRect();
    const width = Math.max(rect.width, this.hero.offsetWidth, 1);
    const height = Math.max(rect.height, this.hero.offsetHeight, 1);
    const dpr = window.devicePixelRatio || 1;

    this.canvas.width = Math.floor(width * dpr);
    this.canvas.height = Math.floor(height * dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = width;
    this.height = height;
  }

  createParticles() {
    const w = this.width || this.canvas.width;
    const h = this.height || this.canvas.height;
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2.5 + 1.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.4 + 0.5,
        color: '#0066CC'
      });
    }
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    this.hero.addEventListener('mousemove', (e) => {
      const rect = this.hero.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.hero.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    this.ctx.fillStyle = particle.color;
    this.ctx.globalAlpha = particle.opacity;
    this.ctx.fill();
    this.ctx.globalAlpha = 1;
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = '#0066CC';
          this.ctx.globalAlpha = 0.35 * (1 - distance / this.connectionDistance);
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
          this.ctx.globalAlpha = 1;
        }
      }

      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.particles[i].x - this.mouse.x;
        const dy = this.particles[i].y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouseDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = '#0066CC';
          this.ctx.globalAlpha = 0.3 * (1 - distance / this.mouseDistance);
          this.ctx.lineWidth = 1.5;
          this.ctx.stroke();
          this.ctx.globalAlpha = 1;
        }
      }
    }
  }

  updateParticle(particle) {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    const w = this.width || this.canvas.width;
    const h = this.height || this.canvas.height;
    if (particle.x < 0 || particle.x > w) {
      particle.speedX *= -1;
    }
    if (particle.y < 0 || particle.y > h) {
      particle.speedY *= -1;
    }
  }

  animate() {
    const w = this.width || this.canvas.width;
    const h = this.height || this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);

    this.particles.forEach(particle => {
      this.drawParticle(particle);
      this.updateParticle(particle);
    });

    this.drawConnections();

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

function initParticles() {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    new ParticlesAnimation('particles-canvas');
  }
}

if (document.readyState === 'complete') {
  initParticles();
} else {
  window.addEventListener('load', initParticles);
}
