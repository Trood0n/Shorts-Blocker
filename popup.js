document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("blockCount", (data) => {
    document.getElementById("count").textContent = data.blockCount || 0;
  });
});