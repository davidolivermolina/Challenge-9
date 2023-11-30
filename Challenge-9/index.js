// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created successfully!')
  );
}

// Function to initialize application
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project:',
      },
      // ... (additional prompts for user input)
    ])
    .then((answers) => {
      // Generate README content
      const readmeContent = generateMarkdown(answers);

      // Write README file
      writeToFile('README.md', readmeContent);
    });
}

// Initialize application
init();
