var inquirer = require("inquirer");

// ****************************
// * ASK THESE QUESTIONS FIRST*
// ****************************
inquirer 
    .prompt ([
// Title of the Project
        {
            type: "input",
            message: "What's the title of the project?",
            name: "title"
        },
// Description of the Project
        {
            type: "editor", 
            message: "Type the description of your project. Note: Default editor will launch. Enter text, proceed to close editor and click on save.",
            name: "description"
        },
// Installation Instructions
        {
            type: "input",
            message: "Enter installation instructions.",
            name: "installation"
        },
// Usage Information
        {
            type: "editor",
            message: "Enter your user story. Note: Default editor will launch. Enter text, proceed to close editor and click on save.",
            name: "usage",
        }
// Contribution Guidelines
// Test Instructions
])
// **************************************
// * THEN, ADD ANSWERS TO THESE SECTIONS*
// **************************************
.then(function(response) {
    console.log("# " + response.title);
    console.log("## Description");
    console.log(response.description);
    console.log("Table of Contents");
    console.log("Installation");
    console.log("Usage Information");
    console.log("License");
    console.log("Contributing");
    console.log("Tests");
    console.log("Questions");
    console.log("## Installation Instructions");
    console.log("```");
    console.log(response.installation);
    console.log("```");
    console.log("## Usage Information");
    console.log("```");
    console.log(response.usage);
    console.log("```");

})
// Description 
// Installation 
// Usage 
// Contributing 
// Tests 

// **********************************
// *  GENERATED README MUST INCLUDE *
// **********************************

// Title 
// Description 
// Table of Contents 
// Installation 
// Usage 
// License 
// Contributing 
// Tests 
// Questions 

