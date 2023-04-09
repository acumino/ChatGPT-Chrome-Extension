chrome.runtime.onInstalled.addListener(() => {
    console.log("test")
    //create context menu
    chrome.contextMenus.create({
        id: "wording",
        title: "Suggest Improvement",
        contexts: ["selection"],
    });
});

// listener for context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    chrome.storage.sync.get("chatGPT_api_key", function (result) {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }
        const api_key = result.chatGPT_api_key;

        chrome.tabs.sendMessage(tab.id, { api_key: api_key, info: info });
    });
});
