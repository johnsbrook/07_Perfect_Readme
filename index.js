const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// ****************************
// * ASK THESE QUESTIONS FIRST*
// ****************************

function promptUser() {
   return inquirer.prompt ([
// Title of the Project
        {
            type: "input",
            message: "What's the title of the project?",
            name: "title"
        },
// Description of the Project
        {
            type: "input", 
            message: "Type the description of your project.",
            name: "description"
        },
// Installation Instructions
        {
            type: "input",
            message: "Enter installation instructions.",
            name: "installation"
        },
//  Usage Information
        {
            type: "input",
            message: "Enter your user story.",
            name: "usage"
        },
//  Contribution Guidelines
        {
            type: "input",
            message: "Enter instructions on how other can contribute to your project.",
            name: "contribution"
        },
// // Test Instructions
        {
            type: "input",
            message: "Enter instructions to test your code.",
            name: "test"
        },
        {
            type: "list",
            message: "Select the license your project is covered under.",
            name: "license",
            choices: ["AFLv3.0", "Apache2.0", "Artistic2.0", "BSLv1.0", "BSD2", "BSD3", "Creative_Commons", "Creative_Commons_Zero_v1.0", "Creative_Commons_Attribution_4.0", "Creative_Commons_Attribution_Share_Alike_4.0", "Do_What_the_F*ck_You_Want_to_Public_License", "ECLv2.0", "Eclipse1.0", "EUv1.1", "GNUAffero3.0", "GNU", "GNUv2.0", "GNUv3.0", "GNULesser", "GNUv2.1", "GNULesserv3.0", "ISC", "LaTeXv1.3c", "Microsoft", "MIT", "Mozilla2.0", "OpenSoftware3.0", "PostgreSQL", "SIL_Open_Font1.1", "University_of_Illinois/NCSA", "Unlicense", "zLib"]
            // choices: "MIT"
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
}

// ***************************************
// * THEN, ADD ANSWERS TO THESE SECTIONS *
// ***************************************

function generateReadme(response) {
    return `
# ${response.title}  ![License](https://img.shields.io/badge/License-${response.license}-brightgreen.svg)  \n

## Description \n 
${response.description} \n

## Table of Contents \n

* [Usage](#usage-information) \n
* [Installation](#installation-instructions) \n
* [License](#license) \n
* [Where to Contribute](#where-to-contribute) \n
* [Tests](#tests) \n
* [Questions](#questions) \n

## Usage Information \n 
    ${response.usage} \n

## Installation Instructions \n 
    ${response.installation} \n

## License \n 
This application is covered under this license: ${response.license}\n
    
## Where to Contribute \n 
${response.contribution} \n

## Tests \n 
${response.test} \n

## Questions \n 
GitHub: [${response.github}](https://github.com/${response.github}) \n 
You may reach me by email at: [${response.email}](mailto:${response.email})
`
}

    
// **********************************
// *  GENERATED README MUST INCLUDE *
// **********************************
promptUser()
    .then(function(response) {
    const readme = generateReadme(response);

        return writeFileAsync("README.md", readme);
    })

    .catch(function(err) {
        console.log(err);
      });