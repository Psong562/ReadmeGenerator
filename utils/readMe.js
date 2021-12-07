// generateReadMe function

const { builtinModules } = require("module")

function generateReadMe(answers) {
return `

<h1 align="center"> ${answers.title} </h1>

![badge](https://img.shields.io/github/repo-size/psong562/readmegenerator) ![badge](https://img.shields.io/github/commit-activity/w/psong562/readmegenerator)

## Table Of Contents
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Test](#Test)
 - [Contributors](#Contributors)
 - [License](#License)
 

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Test
${answers.test}

## Contributors
${answers.contributors}

## License
${answers.license}


#### Please reach me at - 
![badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
${answers.github}

![badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)
${answers.email}


`}

module.exports = generateReadMe ;