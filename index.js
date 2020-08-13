const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)
        }
    })
}

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
            message: 'Are there any installation instructions?',
            name: 'install'
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
            name: 'test'
        },
        {
            type: 'list',
            message: 'Which license did you use?',
            choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
            name: 'license'
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
    .then(answers => {

        
        writeToFile('README1.md', generateMarkdown(answers))


    })
    .catch(err => {
        console.log(err)
    })