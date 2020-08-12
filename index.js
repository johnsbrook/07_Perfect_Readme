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
            name: "usage"
        },
// Contribution Guidelines
        {
            type: "editor",
            message: "Enter instructions on how other can contribute to your project.",
            name: "contribution"
        },
// Test Instructions
        {
            type: "editor",
            message: "Enter instructions to test your code.",
            name: "test"
        },
        {
            type: "list",
            message: "Select the license your project is covered under.",
            name: "license",
            choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause 'Simplified' license", "BSD 3-clause Clear license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What the F*ck You Want to Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL Lincense", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
        }, 
        {
            type: "input",
            message: "What's your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What's your email address?",
            name: "email"
        }
])
// **************************************
// * THEN, ADD ANSWERS TO THESE SECTIONS*
// **************************************
.then(function(response) {
    console.log("# " + response.title);
    console.log("## Description");
    console.log(response.description);
    console.log("## Table of Contents");
    console.log("[Installation Instructions](#installation-instructions)");
    console.log("[Usage Information](#usage-information)");
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
    console.log("## License");
    console.log("This project is covered under this license: " + response.license + ".");
    console.log("## Contributing");
    console.log(response.contribution);
    console.log("## Tests");
    console.log(response.test);
    console.log("## Questions");
    console.log("GitHub: [" + response.github + "]" + "(https://github.com/" + response.github + ")");
    console.log("You may reach me by email at: [" + response.email + "]" + "(mailto:" + response.email + ")");
})


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

