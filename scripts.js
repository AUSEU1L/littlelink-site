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
       window.open(btn.href, '_blank');
    });
  });

  soundcloudButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      animateButtons(soundcloudButtons);
       window.open(btn.href, '_blank');
    });
  });
});

function applyNegativeByTime() {
  const hour = new Date().getHours();
  const body = document.body;
  if (hour >= 18 || hour < 6) {
    body.style.filter = 'invert(1)';
    body.style.backgroundColor = 'black';
  } else {
    body.style.filter = 'invert(0)';
    body.style.backgroundColor = '';
  }
}

window.onload = () => {
  applyNegativeByTime();
  setInterval(applyNegativeByTime, 60 * 1000); // her dakika kontrol et
};
