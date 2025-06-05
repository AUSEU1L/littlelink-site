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
      }, i * 300);
    });
  }

  spotifyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      animateButtons(spotifyButtons);
      setTimeout(() => {
        window.open(btn.href, '_blank');
      }, spotifyButtons.length * 300 + 400);
    });
  });

  soundcloudButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      animateButtons(soundcloudButtons);
      setTimeout(() => {
        window.open(btn.href, '_blank');
      }, soundcloudButtons.length * 300 + 400);
    });
  });
});
