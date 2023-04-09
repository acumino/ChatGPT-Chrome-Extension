chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    var div
    if (document.readyState === "complete") {
        div = injectDivBlock();
    } else {
        window.addEventListener("load", () => {
            div = injectDivBlock()
        });
    }

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + message.api_key
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": "Can you improve following - " + message.info.selectionText }]
        })
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error("Following error occured while fetching response \r\n Error " + response.status + ": " + response.statusText);
            }
            return response.json()
        })
        .then(data => {
            // get the first suggestion from the response
            const suggestion = data.choices[0].message.content.trim();
            const resultContent = div.querySelector(".result-content");
            resultContent.innerHTML = suggestion;
        })
        .catch(error => {
            console.log(error)
            // show alert if something went wrong.
            const resultContent = div.querySelector(".result-content");
            resultContent.innerHTML = error.toString();
        });
});

function injectDivBlock() {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="result-header">
      <span class="result-close">&times;</span>
    </div>
    <div class="result-content">
    <div class="loading-text">Generating response</div>
    <div class="loading-dots">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  `;
    div.classList.add("result-block");
    document.body.appendChild(div);

    const closeButton = div.querySelector(".result-close");
    closeButton.addEventListener("click", () => {
        div.remove();
    });
    return div
}
