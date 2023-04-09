# ChatGPT Chrome Extension
The ChatGPT Chrome Extension is a general-purpose extension that utilizes the OpenAI GPT-3.5 model to provide suggestions based on user input. It can be used for code review, writing, or any other task where you want assistance in generating text.

# Features
- Context menu integration: When the user selects text on a webpage and right-clicks, a context menu item "Suggest Improvement" is displayed.
- API Key: The user must provide a valid ChatGPT API key in the extension options before using the extension.
- Suggestions: When the user selects text and clicks "Suggest Improvement" in the context menu, the extension sends the selected text to the ChatGPT API and displays the top suggestion in a fixed-position popup.

# Installation
To install this extension, follow these steps:

- Download the code from the repository
- Open Google Chrome and navigate to the Extensions page (chrome://extensions/)
- Enable Developer mode (toggle switch in the top right corner)
- Click on "Load unpacked" and select the folder containing the downloaded code

# Usage
To use this extension:

- Obtain a ChatGPT API key by following the instructions on the [OpenAI website](https://platform.openai.com/docs/api-reference/authentication).
- Click on the ChatGPT extension icon in the Chrome toolbar.
- Select the code that you want to improve
- Enter your API key in the provided field and click "Save".
- To generate suggestions, select text on a webpage and right-click to bring up the context menu. Click "Suggest Improvement" and wait for the suggestion to appear.

# Contributing
- This project is open to contributions. If you find a bug or have an idea for an improvement, please create a pull request or submit an issue.

# License
This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE.md) file for more information.