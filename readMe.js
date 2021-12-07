const fs = require (`fs`)
const inquier = require(`inquier`)


promptReadme () => {
inquierer.prompt ([
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
  name: 'test',
  message: 'Choose a license for this projection',
  choices: []
  },
  
])
}