document.addEventListener("DOMContentLoaded", () => {
  const spotifyButtons = document.querySelectorAll(".spotify-btn");
  const soundcloudButtons = document.querySelectorAll(".soundcloud-btn");

  function hideAllTabs() {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.style.display = "none";
    });
  }

  function showTab(id) {
    hideAllTabs();
    const tab = document.getElementById(id);
    if (tab) tab.style.display = "block";
  }

  spotifyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const showId = btn.getAttribute("data-show");
      showTab(showId);
    });
  });

  soundcloudButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const showId = btn.getAttribute("data-show") + "-soundcloud";
      showTab(showId);
    });
  });

  // Sayfa açıldığında Spotify Cotard sekmesini göster
  showTab("cotard");
});
