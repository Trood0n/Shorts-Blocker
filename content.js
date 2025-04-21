function checkAndRedirect() {
  if (window.location.href.includes("youtube.com/shorts/")) {
    chrome.storage.local.get(["blockCount"], (data) => {
      const count = data.blockCount || 0;
      chrome.storage.local.set({ blockCount: count + 1 }, () => {
        console.log(`Block count updated: ${count + 1}`);
      });
    });
    window.location.replace(chrome.runtime.getURL("block.html"));
  }
}

checkAndRedirect();

// Pour SPA navigation (sans reload)
const observer = new MutationObserver(() => {
  checkAndRedirect();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

window.addEventListener("yt-navigate-finish", checkAndRedirect);
