type Tab = chrome.tabs.Tab;

/**
 * unable to log anything from here
 * but if this code is missing,
 * the iframe won't open
 */

chrome.runtime.onMessage.addListener(() => {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs: Array<Tab>) => {
      if (tabs.length > 0 && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'addItem' }, () => {});
      }
    },
  );
});
