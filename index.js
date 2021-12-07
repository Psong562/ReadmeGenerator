// constants and variables and requires for npm
const fs = require (`fs`);
const util = require(`util`);
const inquirer = require(`inquirer`);
const generateReadMe = require(`./utils/readMe.js`);
const writeFileAsync = util.promisify(fs.writeFile)

// function to start prompt
const promptReadme = () => {
 return inquirer.prompt ([
  {
  type: 'input',
  name: 'title',
  message: 'What is your title of your project?',
  },
  {
  type: 'input',
  name: 'description',
  message: 'Please provide a brief description of your project',
  },
  {
  type: 'input',
  name: 'installation',
  message: 'Please provide a brief installation process if any',
  },
  {
  type: 'input',
  name: 'usage',
  message: 'What will this project be used for?',
  },
  {
  type: 'input',
  name: 'contributors',
  message: 'Who are the contributors of this project?',
  },
  {
  type: 'input',
  name: 'test',
  message: 'What are the test instructions project?',
  },
  {
  type: 'list',
  name: 'license',
  message: 'Choose a license for this projection',
  choices: [ `Apache`, `Mozilla`, `MIT` , `Open`, `GNU`],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions project?',
  }
  
  // Answer of prompt moved into writefile to create readme
]) .then(answers => {
  writeToFile(answers)
  console.log(`Successful Readme file created`)
}) .catch((err)=> console.log(err));


};

// function for writre file for answers to promp function
const writeToFile = answers => {
  writeFileAsync(`README.md`, generateReadMe(answers))
}

// start prompt when script is called
promptReadme()














