# Hit The Button (React)

This repo hosts a small browser game built with React. The page is a single
`index.html` file that loads React from a CDN and runs the game contained in
`App.js`.

## Running Locally
Clone this repository and open `index.html` in your browser.

## Deploying to Netlify
1. Push this repository to your Git provider (e.g., GitHub).
2. In Netlify, choose **New site from Git** and select the repository.
3. Set **build command** to `N/A` (there is no build step).
4. Set **publish directory** to the root of the repo (`.`).
5. Deploy the site.

Place any image assets in the `public/` directory so they can be referenced from
`App.js` (e.g., `public/example.png`).

Netlify will host the static `index.html` file, and React will be loaded from a CDN.
