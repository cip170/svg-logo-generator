const inquirer = require("inquirer");
const fs = require("fs");
const setShape = requiew("./lib/shapes.js");


const prompts = [
    {
      type: "input",
      name: "logoName",
      message: "Please enter 1-3 characters",
    },
    {
      type: "input",
      name: "textColour",
      message: `Please enter a colour for the text`,
    },
    {
      type: "input",
      name: "logoColor",
      message: `Please enter a color for the shape`,
    },
    {
      type: "list",
      name: "logoShape",
      message: `Please choose a shape for the logo`,
      choices: ["Circle", "Triangle", "Square"],
    },
  ];

  function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

  function init() {
    inquirer.prompt(prompts)
    .then((response) => {createLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init();