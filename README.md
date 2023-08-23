# svg-logo-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [Overview](#Overview)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Screen Capture](#Screen-Capture)
- [Installation](#Installation)
- [Usage](#Usage)

## Overview
This repository is an exhibition of a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Screen Capture
![Screenshot (542)](https://github.com/cip170/svg-logo-generator/assets/134829009/0f5658c3-5f81-405e-9779-2750f5de1cc2)

## Video Walkthrough
https://drive.google.com/file/d/1-PI3dN9nsgIpXUsUfdL63DegIL-OUHr4/view?usp=drive_link

## Installation

1. Open the terminal on your machine.
2. Use the terminal command cd to navigate to the directory where we want the repository located.
3. Locate the 'Code' button on the 'svg-logo-maker' repository and then copy the ssh link to the clipboard
4. Use the git command git clone followed by the URL copied from Github to clone the repo to our machine.
5. Navigate to the cloned repo and open it with vs code, then open the file index.js and its integrated terminal and run 'npm i'.

## Usage
1. Open index.js in the terminal and run 'node index.js'.
2. Follow and answer the prompts
3. View your svg in the logo.svg file and open in a web browser to view
