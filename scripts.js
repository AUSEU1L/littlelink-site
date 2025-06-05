
  document.addEventListener('DOMContentLoaded', () => {
    function animateButtons(buttons) {
      buttons.forEach((btn, i) => {
        btn.style.opacity = '0';
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => {
          btn.classList.add('animate');
          btn.style.opacity = '1';
          btn.style.transform = 'scale(1)';
          setTimeout(() => btn.classList.remove('animate'), 400);
        }, i * 100); // Daha hızlı animasyon
      });
    }

    ['spotify', 'soundcloud'].forEach(id => {
      const buttons = document.querySelectorAll(`#${id} a`);
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          animateButtons(buttons);
          // Hemen yönlendir (gecikme olmadan)
          window.location.href = btn.href;
        });
      });
    });
  });

