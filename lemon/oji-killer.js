// chrome.webRequest.onBeforeRequest.addListener(
//     removeListener("https://nanext.alcnanext.jp/anetn/Content/images/dr.png")
//   )
//   chrome.webRequest.onBeforeRequest.removeListener(listener)
//   chrome.webRequest.onBeforeRequest.hasListener(listener)
chrome.webRequestBlocking.onBeforeRequest.addListener(
    function(details) {
      if (details.url === "https://nanext.alcnanext.jp/anetn/Content/images/dr.png") {
        return { cancel: true };
      }
      return {};
    },
    { urls: ["https://nanext.alcnanext.jp/anetn/Content/images/dr.png"] },
    ["blocking"]
  );
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url === "https://nanext.alcnanext.jp/anetn/Content/images/dr.png") {
        return { cancel: true };
      }
      return { cancel: false };
    },
    { urls: ["https://*/*"] },
    ["blocking"]
  );
  