# Syncollab: Realtime Collaborative Code Editor

![Alt text](/screenshots/HomePage.png)

![Alt text](/screenshots/EditorPage.png)

## Introduction

Are you tired of sending code snippets back and forth, struggling to debug and collaborate with your team? Look no further! **Syncollab** is here to revolutionize the way you code together. This powerful and intuitive collaborative code editor is designed to empower developers, and teams to work seamlessly in real-time, regardless of their location. With **Syncollab**, you can code together, debug together, and ship faster, together.

## Features

- Multiple users can join a room and edit code together
- Changes are reflected in real time
- Copy button to copy the room id to clipboard
- Leave button to leave the room
- Supports syntax highlighting (currently only for JavaScript)
- Users can leave the room and rejoin later to continue editing
- Joining & leaving of users is also reflected in real time

## Tech Stack

**Frontend**

- React
- Recoil
- CodeMirror
- react-hot-toast
- axios
- react-router

**Backend**

- Node.js
- Express.js
- Socket.io

## Run Locally

- Clone this repository and cd into it
- Run `yarn` to install the dependencies
- To start the react app client run `yarn start` in one terminal
- To start the server run `yarn server:dev` in another terminal
- Go to `http://localhost:3000` to view the app
- Create a room by clicking on the `create new room` button and put a username of your choice
- Copy the room id by clicking on the `Copy ROOM ID` button
- To join as an another user open another browser/browser-window or an incognito tab and go to `http://localhost:3000`
- Enter the same room id to join the same room

Now both your editor will be synced and you can see the changes in real time. Try opening the same room in multiple browsers/browsers-windows and see the changes.

## Contributing

Contributions to SuperShop are welcome! If you'd like to contribute, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and ensure that the code passes all tests.
- Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
