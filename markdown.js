function renderTitle () {
    return `# ${data.title}\n`

    renderDescription();
}

function renderDescription () {

    return `## Description \n ${data.description} \n`;

    renderInstruction();
}

function renderInstruction() {

    return `## Installation \n ${data.installation} \n`;

    renderUsage(); 
}

function renderUsage() {

    return `## Usage \n ${data.usage} \n`;

    renderLicense();
}

function renderLicense() {

    return `## License \n This project is covered under this license: ${data.license} \n`;

    renderContribution();
}

function renderContribution() {

    return `## How to Contribute \n ${data.contribution} \n`;

    renderTest();
}

function renderTest() {
    return `## Tests \n ${data.test}`;

    renderQuestions();
}

function renderQuestions() {

    return `## Questions \n This is my GitHub repository: ${data.github} (https://github.com/${data.github}) \n You may reach me by email at [${data.email}](${data.email})`

}

module.exports = {
  
};
  