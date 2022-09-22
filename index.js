// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?*',
    'Provide a short description of your project.*',
    'What are the steps required to install your project?',
    'Provide instructions and examples of use.',
    'List your collaborators, if any, with links to their GitHub profiles.',
    'Choose a license',
    'Provide contribution guidelines for your project:',
    'Provide test instructions and examples for your project:',
    'What is your GitHub username?*',
    'What is your email address?*',
    'Provide instructions how to reach you with additional questions.'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `${questions[0]}`,
                name: 'title',
            },
            {
                type: 'input',
                message: `${questions[1]}`,
                name: 'description',
            },
            {
                type: 'input',
                message: `${questions[2]}`,
                name: 'installation',
            },
            {
                type: 'input',
                message: `${questions[3]}`,
                name: 'usage',
            },
            {
                type: 'input',
                message: `${questions[4]}`,
                name: 'credits',
            },
            {
                type: 'list',
                message: `${questions[5]}`,
                name: 'license',
                choices: [
                    'GNU AGPL v3',
                    'GNU GPL v3',
                    'GNU LGPL v3',
                    'Mozilla Public License 2.0',
                    'Apache License 2.0',
                    'The MIT License',
                    'Boost Software License 1.0',
                    'The Unlicense'
                ],
                default: 'The Unlicense'
            },
            {
                type: 'input',
                message: `${questions[6]}`,
                name: 'contributing',
            },
            {
                type: 'input',
                message: `${questions[7]}`,
                name: 'tests',
            },
            {
                type: 'input',
                message: `${questions[8]}`,
                name: 'username',
            },
            {
                type: 'input',
                message: `${questions[9]}`,
                name: 'email',
            },
            {
                type: 'input',
                message: `${questions[10]}`,
                name: 'questions',
            },])
        .then((output) => {
            console.log(output);
        });
};

// Function call to initialize app
init();
