(function() {
  // Hero background image
  const heroImage = document.getElementById('heroImage');
  if (heroImage && typeof DORE !== 'undefined') {
    const img = new Image();
    img.onload = function() {
      heroImage.style.backgroundImage = 'url(' + DORE.path(DORE.hero) + ')';
      heroImage.classList.add('hero-image-loaded');
    };
    img.src = DORE.path(DORE.hero);
  }

  // Particle effect for hero
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const count = 40;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (6 + Math.random() * 6) + 's';
      particle.style.width = particle.style.height = (1 + Math.random() * 2) + 'px';
      particle.style.opacity = '0';
      particlesContainer.appendChild(particle);
    }
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .resource-card, .stat-card, .study-path, .theme-card, .dore-preview-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();
