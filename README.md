# Spotnana-project
This project is a web-based application called Curious, designed to support learning and question-based exploration. The application provides curated links at the top of the interface, allowing users to navigate to external resources that promote educational discovery. Additionally, users can enter questions into the input field at the bottom of the interface and submit them to receive responses powered by OpenAI.

# Image
<img width="1813" height="1328" alt="image" src="https://github.com/user-attachments/assets/d7413a9a-2e4d-4977-8ebe-c4d9f36de1e8" />

# Features
<br>- Interactive Q&A: Users can submit questions and receive AI-generated responses.
<br>- Curated Learning Links: Quick access to external resources that promote learning.
<br>- Real-Time Feedback: Displays loading states and handles input validation.
<br>- Responsive UI: Clean and accessible interface for a smooth user experience.

# Setup and running the Application:
1: Open the **client** directory in Terminal or iTerm and execute:
```npm run dev```

2a: Open the **server** directory in a separate Terminal or iTerm session and execute:
``` npm run dev ```
2b: Create a new ``.env ``` file in the server directory:
.env variable should be ``` OPENAI_API_KEY=<your open ai key here>
*** see number 4 instructions for getting your own api key ***

3: Launch a web browser (e.g., Google Chrome) and navigate to:
``` http://localhost:5173 ```

4: Getting **your own API key for OpenAi** to use in ``` .env ``` file
- Navigate to ```https://openai.com/api/``` and look at the top right portion of the page for the "Log In" dropdown button.
- From the dropdown menu select API platform
- This will navigate to a new url ```https://platform.openai.com/chat```
- Along the left side of the page click on ```API keys```
- In the top right corner of the page near the header you should now see a butotn to ```Create new secrete key```. This will generate a new key to use in the .env file. 



# Tech Stack
***Frontend***
- React
- Vite
- Bootstrap
- OpenAI
- CSS

***Backend***
- Axios
- Express
- Cors
- Nodemon

# Architecture Overview
The application follows a client-server architecture:
<br>- The client (React) handles the user interface and user interactions.
<br>- The server (Node.js/Express) processes requests and communicates with the OpenAI API.
<br>- User input is sent from the client to the server, which then returns a generated response to be displayed in the UI.
