# Hit The Button Game

This repository contains a small React game. The page is a single `index.html` file that loads React from a CDN and renders the game defined in `App.js`.

## Running Locally
Open `index.html` in your browser.

## Deploying to Netlify
1. Push this repository to your Git provider (e.g., GitHub).
2. In Netlify, choose **New site from Git** and select the repository.
3. Set **build command** to `N/A` (there is no build step).
4. Set **publish directory** to the root of the repo (`.`).
5. Deploy the site.

Netlify will host the static `index.html` file. React is loaded from a CDN, and the game code comes from `App.js`.
