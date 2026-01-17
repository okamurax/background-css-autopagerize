chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab || !tab.url || !tab.url.startsWith("http")) return;
  if (info.status !== 'complete') return;
  try {
    const currentTab = await chrome.tabs.get(tabId);
    if (currentTab.status !== 'complete') {
      return;
    }
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        if (document.getElementById("abddcffbfbac")) return;
        if (document.head) {
          const styleElement = document.createElement('style');
          styleElement.id = "abddcffbfbac";
          styleElement.textContent = [
            ".autopagerize_page_info_inner{display:none;}",
            ".autopagerize_page_info{border-color:#ccc !important;}"
          ].join("\n");
          document.head.insertAdjacentElement('afterbegin', styleElement);
        }
      }
    });
  } catch (error) {
  }
});