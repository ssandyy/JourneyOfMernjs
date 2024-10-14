# JourneyOfMernjs
javascript, react, node  from scratch




tailwind interation steps:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

change:
tailwind.config.js
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
