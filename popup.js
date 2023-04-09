document.getElementById("save-api-key").addEventListener("click", function() {
    const apiKey = document.getElementById("api-key-input").value;
    chrome.storage.sync.set({"chatGPT_api_key": apiKey}, function() {
        console.log("API key saved");
    });
});