document.addEventListener('DOMContentLoaded', () => {
  const spotifyButtons = document.querySelectorAll('.group.spotify a');
  const soundcloudButtons = document.querySelectorAll('.group.soundcloud a');

  function animateButtons(buttons) {
    buttons.forEach((btn, i) => {
      btn.style.opacity = '0';
      btn.style.transform = 'scale(0.9)';
      setTimeout(() => {
        btn.classList.add('animate');
        btn.style.opacity = '1';
        btn.style.transform = 'scale(1)';
        setTimeout(() => {
          btn.classList.remove('animate');
        }, 400);
      }, i * 100); // daha kısa süre önerildi
    });
  }

  function setupSafeClick(buttons) {
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.href;

        animateButtons(buttons);

        // Yeni sekme açma girişimi kullanıcı etkileşimiyle hemen yapılmalı
        const newTab = window.open(url, '_blank');
        if (!newTab) {
          alert("Tarayıcınız yeni sekme açmayı engelledi. Lütfen ayarları kontrol edin.");
        }
      });
    });
  }

  setupSafeClick(spotifyButtons);
  setupSafeClick(soundcloudButtons);
});
