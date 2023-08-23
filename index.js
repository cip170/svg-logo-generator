const {Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');
const SVG = require('./lib/svg')
const {writeFile} = require('fs/promises')
 
function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'characters',
            message: 'Please Enter up to 3 characters',
            validate: function(input){
                if(input.length > 3){
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
            choices: ["Circle", "Square", "Triangle"],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a colour for the shape',
        },
   
    ]).then(({characters, textColor, shape, shapeColor})=>{
        let shapeType;
        switch (shape) {
            case 'circle':
                shapeType = new Circle()
                break;

            case 'square':
                shapeType = new Square()
                break;

            default:
            case 'triangle':
                shapeType = new Triangle()
                break;
        }
        shapeType.setColor(shapeColor);
        const svg = new SVG();
        svg.setTextColor(textColor, characters);
        svg.setShape(shapeType);
        return writeFile('logo.svg', svg.render())
    }).then(()=>{
        console.log('Generated logo.svg');
    }).catch((error)=>{
        console.log(error);
    })
}

init();

module.exports = {};