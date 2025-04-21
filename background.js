chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ blockCount: 0 });
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    chrome.storage.local.get("blockCount", (data) => {
      const newCount = (data.blockCount || 0) + 1;
      chrome.storage.local.set({ blockCount: newCount });
    });

    return { redirectUrl: chrome.runtime.getURL("block.html") };
  },
  { urls: ["*://www.youtube.com/shorts/*"] },
  ["blocking"]
);
