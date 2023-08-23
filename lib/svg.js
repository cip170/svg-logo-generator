class SVG {
    constructor(){
        this.textEl = "";
        this.shapeEl = "";
    }
    // Render method that generates the complete SVG markup
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
    // Method to set the text color and content in the SVG
    setTextColor(textColor, message){
         if(message.length > 3){
        throw new Error("Please do not enter more than 3 characters")
        } 
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${message}</text>`
    }
    // Method to set the shape element in the SVG
    setShape(shape){
        this.shapeEl = shape.render() // Using the render method of the provided shape
    }
}

module.exports = SVG // Exporting the SVG class