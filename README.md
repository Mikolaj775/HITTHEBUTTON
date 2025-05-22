
# React Hello World

This repository contains a very small React example. The page is a single `index.html` file that loads React (and ReactDOM) from a CDN and renders "Hello, world!" on the screen.

## Running Locally
Simply open `index.html` in your browser to view the page. No build tools or bundlers are required.


## Running Locally
Open `index.html` in your browser.


## Deploying to Netlify
1. Push this repository to your Git provider (e.g., GitHub).
2. In Netlify, choose **New site from Git** and select the repository.
3. Set **build command** to `N/A` (there is no build step).
4. Set **publish directory** to the root of the repo (`.`).
5. Deploy the site.

Netlify will host the static `index.html` file, and React will be loaded from a CDN.


Netlify will host the static `index.html` file, and React will be loaded from a CDN. All images can be placed in the `public/` folder and referenced relative to the project root.

