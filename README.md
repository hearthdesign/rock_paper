# SPOCKY
## R.P.S.L.S. GAME – HTML – CSS – JAVASCRIPT
## Rock Paper Scissors Lizard Spock (RPSLS) – Web Game
==SPOCKY== is a fun and interactive browser-based game inspired by the extended version of Rock Paper Scissors, made famous by *The Big Bang Theory*.

The aim of the game is to give anyone interested in games the opportunity to play this timeless game, which has existed throughout history and across many countries in various forms and with different rules.

This project is built using **HTML**, **CSS**, and **JavaScript**, and provides an animated, audio-enhanced experience with multiple custom-designed opponents.

## Overview
The RPSLS game expands the classic Rock Paper Scissors by adding two new moves: Lizard and Spock. These additions introduce more variety and strategy, making the game more engaging.

This project began with a simple idea, a drawing, and inspiration from arcade games of the 1980s. The visual design — particularly the large, colorful, round buttons — was influenced by those classic machines. The aesthetics and straightforward logic of retro arcade games helped shape this digital version of RPSLS.

![opponent_buttons.png](https://github.com/hearthdesign/assets_for_repos/blob/main/assets_for_repos/assets/images/spocky/opponent_buttons.png)

==SPOCKY== doesn't just recreate the RPSLS game; it also aims to evoke the nostalgic feeling of playing those vintage games. Additionally, the game features six opponents, each with unique avatars, moves, and a touch of humor.

## Project Structure
The project follows a consistent design language with bold color schemes and rounded shapes. 

### Common structural elements include:
A header with logo, title, and navigation menu

   ![spocky_header.png](https://github.com/hearthdesign/assets_for_repos/blob/main/assets_for_repos/assets/images/spocky/spocky_header.png)
A main section with page-specific content
A footer containing legal information and a contact section
Scrollbars for long content to preserve layout and enhance usability

### The Three Main Pages
#### 1. Home Page (index.html)
Navigation menu to access the Game and History pages
Brief introduction to RPSLS
A colorful table using emojis to explain the rules and winning logic of all five moves

![main_section.png](https://github.com/hearthdesign/assets_for_repos/blob/main/assets_for_repos/assets/images/spocky/main_section.png)

#### 2. Game Page (game.html)
*  Interactive game interface
*  Selection of five custom opponents plus one default
*  Real-time score tracking
*  Sound effects for:
  - Navigation
  - Opponent selection
  - Move selection
  - Game outcomes
  - Resetting the game
*  Toggle button to enable or disable sound

#### 3. History Page (history.html)
Background on the original Rock Paper Scissors game

Explanation of the RPSLS variant, its origins, and how it works

## Features
Custom logo and visual design
Responsive layout for mobile and desktop devices
Game history to educate users
```
SPOCKY/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── sounds/
├── script.js
```

### Rules of RPSLS:
Rock crushes Scissors
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock

## Features Yet to Be Implemented
-  Difficulty settings
-  Save high scores
-  add modalities (e.g. tournament) 
-  add a goal to be reached (e.g. win 3 out of 5)
-  add set of movement to the default opponent

---
## Testing
The site was tested on multiple physical devices and using browser developer tools (e.g., Chrome DevTools). It was designed mobile-first and uses relative units like percentages and rem, ensuring consistent scaling across screen sizes.

#### JavaScript Error Fix
An error occurred due to some elements (e.g., reset button or sound toggle) not existing on all pages. This caused addEventListener to throw errors.
The fix was to wrap event listener code in if conditions to check for the presence of those elements before attaching handlers.

### Validator Testing

![CSS](https://jigsaw.w3.org/css-validator/images/vcss)

![CSS](https://jigsaw.w3.org/css-validator/images/vcss-blue)

### HTML
No errors returned from the W3C HTML Validator

### CSS
No critical errors from the W3C CSS Validator (Jigsaw)
4 warnings due to use of WebKit scrollbar styling, which isn’t recognized in Firefox. A Firefox-compatible fallback has been implemented, but the warnings still appear as expected.

### Cross-Browser Testing
Tested successfully on:
Firefox
Chrome
Edge
Brave
LibreWolf
DuckDuckGo browser
Deployment
The site was deployed via GitHub Pages:

### Deployment steps:
-  In the repository on GitHub
-  go to the Settings tab
-  Under Pages, select the source branch (e.g., main)
-  GitHub automatically generates and publishes the site

🔗 Live link: [https://hearthdesign.github.io/spocky/]

--- 
## Credits
Code reference and debugging assistance: Stack Overflow, W3Schools
These resources were crucial for learning and resolving syntax issues

## Content
The text for the History page and general informations was taken from Wikipedia:
[RPSLS](https://en.wikipedia.org/wiki/Rock_paper_scissors#Additional_weapons)

## Media credits
- Concept based on RPSLS variation.
- Sound effects from pixabay at https://pixabay.com/
- Image at the History page sourced from Wikipedia at: 
[RPSLS](https://en.wikipedia.org/wiki/Rock_paper_scissors#Additional_weapons)


