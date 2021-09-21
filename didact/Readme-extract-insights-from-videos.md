<html>
    <style>
        .button.is-dark.is-small {
            font-family: 'IBM Plex Sans', sans-serif;
            background-color: #1a1a1a;
            border-color: white;
            color: #fff;
        }
        .button.is-dark.is-small:hover {
            font-family: 'IBM Plex Sans', sans-serif;
            background-color: #2a67f5;
            border-color: white;
            color: #fff;
        }
    </style>
</html>

# Code Pattern: Extract insights from videos
[developer.ibm.com](https://developer.ibm.com/patterns/extract-textual-insights-from-a-given-video/)
## Summary
In this code pattern, learn how to extract speaker diarized notes and meaningful insights reports using IBM® Watson™ Speech To Text, Watson Natural Language Processing, and Watson Tone Analysis when given any video.

## Description
In a virtually connected world, staying focused on work or education is very important. Studies suggest that many people lose their focus in live virtual meetings or virtual classroom sessions after approximately 20 minutes. Therefore, many meetings and virtual classrooms are recorded so that an individual can watch it later.

It might help if these recordings could be analyzed, and a detailed report of the meeting or class is generated by using artificial intelligence (AI). This code pattern explains how to do that. Given a video recording of the virtual meeting or virtual classroom, it explains how to extract audio from a video file using the FFmpeg open source library, transcribe the audio to get speaker-diarized notes with custom-trained language and acoustic speech to text models, and generate a natural language understanding report that consists of the category, concepts, emotion, entities, keywords, sentiment, top positive sentences, and word clouds using a Python Flask runtime.

After completing the code pattern, you understand how to:

- Use the Watson Speech to Text service to convert the human voice into the written word
- Use advanced natural language processing to analyze text and extract metadata from content such as concepts, entities, keywords, categories, sentiment, and emotion
- Leverage Watson Tone Analyzer cognitive linguistic analysis to identify a variety of tones at both the sentence and document level

## Flow
![architecture](https://developer.ibm.com/developer/default/patterns/extract-textual-insights-from-a-given-video/images/extract-textual-insights-from-a-given-video-flow.png)

1. User uploads recorded video file of the virtual meeting or a virtual classroom in the application.

2. FFMPG Library extracts audio from the video file.

3. Watson Speech To Text transcribes the audio to give a diarized textual output.

4. Watson Language Translator (Optionally) translates other languages into English transcript.

5. Watson Tone Analyzer analyses the transcript and picks up top positive statements form the transcript.

6. Watson Natural Language Understanding reads the transcript to identify key pointers from the transcript and get the sentiments and emotions.

7. The key pointers and summary of the video is then presented to the user in the application.

8. The user can then download the textual insights.

## Instructions

This is an Interactive instructions, follow the steps to setup a working instance of the code pattern in the Developer Playground.

<a class="button is-dark is-small" title="Open Terminal" href="didact://?commandId=terminal-for-nodejs-container:new" >Open Terminal</a>

### 1. Clone the GitHub repository

<a class="button is-dark is-small" title="Clone the Repo" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal$$git%20clone%20https%3A%2F%2Fgithub.com%2FIBM%2Fextract-textual-insights-from-video.git%20%26%26%20cd%20extract-textual-insights-from-video%2F%20%26%26%20pip3.8%20install%20-r%20requirements.txt" >Get the Code Pattern on Playground</a>

### 2. Create and Configure IBM Watson Services
You need to be logged in to your IBM Cloud account in the Developer Playground to create and configure services.

<a class="button is-dark is-small" title="Login to IBM Cloud" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal$$cd%20${CHE_PROJECTS_ROOT}/extract-textual-insights-from-video%20%26%26%20ibmcloud%20login%20--sso%20%26%26%20ibmcloud%20target%20--cf%20%26%26%20ibmcloud%20target%20-g%20Default">Login to IBM Cloud</a>

Do not have an IBM Cloud Account? click [here](https://cloud.ibm.com/registration) to create one for free.

This code pattern uses the following IBM Watson Services:

- [Natural Language Understanding](https://cloud.ibm.com/catalog/services/natural-language-understanding): Use advanced NLP to analyze text and extract meta-data from content such as concepts, entities, keywords, categories, sentiment, emotion, relations, and semantic roles.

- [Tone Analyzer](https://cloud.ibm.com/catalog/services/tone-analyzer): Tone Analyzer leverages cognitive linguistic analysis to identify a variety of tones at both the sentence and document level.

- [Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text): The Speech to Text service converts the human voice into the written word.

Create these services and configure the credentials in the code pattern with just a click of button.

<a class="button is-dark is-small" title="Create IBM Watson Services" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal$$cd%20${CHE_PROJECTS_ROOT}/extract-textual-insights-from-video%20%26%26%20chmod%20%2Bx%20.%2Fcreate-ibm-cloud-services.sh%20%26%26%20.%2Fcreate-ibm-cloud-services.sh" >Create IBM Watson Services</a>

### 3. Build and Run the Application
You can build and run the Application within the Developer Playground, click on **Build and Run** to start the application.

<a class="button is-dark is-small" title="Build and Run" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal$$cd%20${CHE_PROJECTS_ROOT}/extract-textual-insights-from-video%20%26%26%20python3.8%20app.py">Build and Run</a>

You can make use of any meeting video or classroom video that you have or you can download the [video](http://videos.bigdatauniversity.com/DV0101EN/Module_0_Welcome.mp4) that we have used for the demonstration purpose.

<a class="button is-dark is-small" title="Build and Run" href="didact://?commandId=vscode.didact.sendNamedTerminalCtrlC&text=nodejs%20terminal">Stop Running Application</a>

### 4. Clean up
Completed the code pattern? Click on **Clean up** to delete the IBM Cloud services that were created.

<a class="button is-dark is-small" title="Delete services from IBM Cloud" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal$$cd%20${CHE_PROJECTS_ROOT}/extract-textual-insights-from-video%20%26%26%20chmod%20%2Bx%20.%2Fdeleteservice.sh%20%26%26%20.%2Fdeleteservice.sh">Clean up</a>

You can also manage the created services in [IBM Cloud Dashboard](https://cloud.ibm.com/resources).

You can find the detailed steps in the [README](didact://?commandId=vscode.didact.openTutorial&file="extract-textual-insights-from-video.git%20%26%26%20cd%20extract-textual-insights-from-video%2FREADME.md") file.
