// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [];
inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter the title of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'Please enter usage information for your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contribustion guidelines for your project',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter test instructions for your project',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'Please enter questions for your project',
        name: 'questions'
    }
])
.then((data) => {
    writeToFile('README.md', data);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent =
`# ${data.title}

## Description
    ${data.desc}

## Installation Instructions
    ${data.instructions}

## Usage
    ${data.usage}

## Contribution Guidelines
    ${data.contribution}

## Testing
    ${data.testing}

## Questions
    ${data.questions}
    `;
    fs.writeFile(fileName, readmeContent, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
