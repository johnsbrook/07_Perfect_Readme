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
            choices: ["Academic_Free_License_v3.0", "Apache_license_2.0", "Artistic_license_2.0", "Boost_Software_License_1.0", "BSD_2_clause_'Simplified'_license", "BSD 3_clause_Clear_license", "Creative_Commons_license_family", "Creative_Commons_Zero_v1.0_Universal", "Creative_Commons_Attribution_4.0", "Creative_Commons_Attribution_Share_Alike_4.0", "Do_What_the_F*ck_You_Want_to_Public_License", "Educational_Community_License_v2.0", "Eclipse_Public_License_1.0", "European_Union_Public_License_1.1", "GNU_Affero_General_Public_License_v3.0", "GNU_General_Public_License_family", "GNU_General_Public_License_v2.0", "GNU_General_Public_License_v3.0", "GNU_Lesser_General_Public_License_family", "GNU_Lesser_General_Public_License_v2.1", "GNU_Lesser_General_Public_License_v3.0", "ISC", "LaTeX_Project_License_v1.3c", "Microsoft_Public_License", "MIT", "Mozilla_Public_License_2.0", "Open_Software_License_3.0", "PostgreSQL_Lincense", "SIL_Open_Font_License_1.1", "University_of_Illinois/NCSA_Open_Source_License", "The_Unlicense", "zLib License"]
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
# ${response.title} \n

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
${response.license} [![License](https://img.shields.io/badge/License-${response.license}-brightgreen.svg)]  \n
    
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