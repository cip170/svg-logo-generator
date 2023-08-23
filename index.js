const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const SVG = require('./lib/svg')
const { writeFile } = require('fs/promises')

// Function to initialize the logo generation process
function init() {
    // Prompting the user for input using inquirer
    inquirer.prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Please Enter up to 3 characters',
            validate: function (input) {
                if (input.length > 3) {
                    return "Please do not enter more than 3 characters"
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a colour for your text',
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Please enter a shape from the list',
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a colour for the shape',
        },

    ]).then(({ characters, textColor, shape, shapeColor }) => {
        let shapeType;
        // Determining the shape type based on user input
        switch (shape.toLowerCase()) {
            case 'circle':
                shapeType = new Circle()
                break;
            case 'triangle':
                shapeType = new Triangle()
                break;
            case 'square':
                shapeType = new Square()
                break;
            default:
        }

        // Setting the color for the chosen shape
        shapeType.setColor(shapeColor);
        const svg = new SVG(); // Creating an SVG rendering instance
        svg.setTextColor(textColor, characters); // Setting text color and content
        svg.setShape(shapeType); // Setting the chosen shape in SVG
        return writeFile('logo.svg', svg.render()) // Writing the SVG rendering result to a file
    }).then(() => {
        console.log('Generated logo.svg'); // Logging success message
    }).catch((error) => {
        console.log(error); // Handling errors
    })
}

init(); // Calling the initialization function to start logo generation

module.exports = {};