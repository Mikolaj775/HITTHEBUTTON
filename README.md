# Hit The Button Game

This repository contains the *Hit The Button* game implemented in React. The app runs entirely from a single `index.html` file that loads React from a CDN and executes the game logic from `App.js`.

## Running Locally
Open `index.html` in your browser.

## Deploying to Netlify
1. Push this repository to your Git provider (e.g., GitHub).
2. In Netlify, choose **New site from Git** and select the repository.
3. Set **build command** to `N/A` (there is no build step).
4. Set **publish directory** to the root of the repo (`.`).
5. Deploy the site.

Netlify will host the static files (`index.html`, `App.js`, and `App.css`), and React will be loaded from a CDN.
