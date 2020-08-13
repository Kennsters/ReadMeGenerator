const inquirer = require('inquirer')
// const fs = require('fs')
// let generateMarkdown = require('./utils/generateMarkdown')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle'
        },
        {
            type: 'input',
            message: 'Write a brief description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Any usage information?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Any contribution guidelines?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Are there any test instructions?',
            name: 'tests'
        },
        {
            type: 'list',
            choice: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
            name: 'choice'
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ])
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })








































// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
