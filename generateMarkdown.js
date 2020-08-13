// function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.projectTitle}
![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)
This application is covered under: ${answers.license}

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}

## License
The Lisence Used: ${answers.license}
![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
If you have any questions you can reach me here on my Github [${answers.username}](https://github.com/${answers.username}) or you can email me at ${answers.email}. 
`;
}

module.exports = generateMarkdown;
