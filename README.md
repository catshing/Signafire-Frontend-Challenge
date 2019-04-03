# Signafire Frontend Challenge

This is a Frontend take home challenge at Signafire and this test was completed in Javascript using React. I heavily centralized on the design aspect of the challenge which provides a friendly user experience to browser through. 

## Features 

- Star and unstar messages from the message list 
- Remove messages from the message list 
- View both trashed and untrashed messages 
- Search texts in a search bar and they will be highlighted in the messsage list 
- Untrashed messages will not be highlighted after they have been removed from the untrashed message list 

### Prerequisites

You need to install the following: 

-Node.js
-npm 

### Setup

Goto the project folder and install required dependencies:

```
npm install 
```

Run the app in the development mode 

```
npm start and then go to http://localhost:8080/ in your browser
```

For production build 

```
npm build
```

### The task - 
##Frontend Track

#### MVP

Reference the wireframe included in this repo under `/assets` folder. Match styling of the page as close to it as possible. The wireframe was not designed to have fully fleshed out UX, so use your best judgement to make your app more user friendly. Also, you will be graded on how you build your components (hint: should not only have one javascript file), your folder structure, and code readability since we highly value quality of our code.

- Display all the messages and its contents
- Display length of messages starred
- Able to toggle starring messages
  - Since API is not provided, for the frontend track, any user input modification to the provided JSON is not expected to persist over multiple sessions.

#### Additional Features

- Add trash button
  - Place the button on the right side of "Star Message!"/"Starred!" button
  - Button font color: `#ffffff`
  - Button background color: `#ff4007`
  - Click the button to trash a message
  - Trashed message should no longer be visible in the view
- Add view toggle button
  - Place the button below the length of starred message information text ("Starred: 12" in the wireframe)
  - Display "Show Trashed Messages" by default
  - Clicking the button should toggle the view to display only trashed messages
    - Button should change to display "Show Untrashed Messages"
  - Clicking the button again should toggle the view to display only untrashed messages
- Text highlight
  - Place an input box right side of "Show Trashed Messages"
  - Input box should have a "Submit" button to its right
  - User is able to type in any text and click "Submit" button
  - If any of the texts in the message content matches the input query, highlight the text with a background color of your choice
    - Highlight should be applied to all untrashed messages
  - (i.e. user input = "foo", content = "foo bar", highlighted content = "[foo] bar")