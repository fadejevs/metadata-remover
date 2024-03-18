chrome.contextMenus.create({
  id: "noMetadataDownload",
  title: "Download Image without Metadata",
  contexts: ["image"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "noMetadataDownload") {
    chrome.downloads.download({
      url: info.srcUrl,
      filename: "original.png",
      saveAs: true,
    });
  }
});
