# Hit The Button Game

This repository hosts a simple React game called **Hit The Button**. The game logic is in `App.js` and is rendered directly in the browser without any build step. React is loaded from a CDN.

## Running Locally
Open `index.html` in your browser to play the game.

## Deploying to Netlify
1. Push this repository to your Git provider (e.g., GitHub).
2. In Netlify, choose **New site from Git** and select the repository.
3. Set **build command** to `N/A` (there is no build step).
4. Set **publish directory** to the root of the repo (`.`).
5. Deploy the site.

Netlify will host the static `index.html` file, and React will be loaded from a CDN. All images can be placed in the `public/` folder and referenced relative to the project root.
