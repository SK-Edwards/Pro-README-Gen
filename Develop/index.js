// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// inquirer.prompt([
// {   type: 'input',
//     message: 'What is the title of your project?',
//     ame: 'Title'
// },
// {
//     type: 'input',
//     message: 'Please providea brief description of your project.',
//     name: ' Description'
// },

// {
//     type: 'input',
//     message: 'What are the steps required to install your project?',
//     name: 'Installation',
// },
// {
//     type: 'input',
//     message: 'Provide usage information for your project.',
//     name: 'Usage',
// }, 
// {
//     type: 'input',
//     message: 'Who are the contributors to this project?',
//     name: 'Contributors',
// },
// {
//     type: 'checkbox',
//     message: 'What type of license do you have for this project?',
//     name: 'License',
//     choices: ['MIT License','Apache License 2.0','GPL License (aka GNU General Public License v3.0)',' BSD License(2-clause)','BSD License(3-clause)','BSD License(4-claus)']
// }


// ])
// .then((responses) => {
//     console.log(responses);

//     fs.appendFile('log.txt', JSON.stringify(responses, null, '\t')), (err) =>
//     err ? console.error(err) : console.log("Finito");
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
      inquirer.prompt([
        {   type: 'input',
            message: 'What is the title of your project?',
            name: 'Title'
        },
        {
            type: 'input',
            message: 'Please providea brief description of your project.',
            name: 'Description'
        },
        
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Provide usage information for your project.',
            name: 'Usage',
        }, 
        {
            type: 'input',
            message: 'Who are the contributors to this project?',
            name: 'Contributors',
        },
        {
            type: 'checkbox',
            message: 'What type of license do you have for this project?',
            name: 'License',
            choices: ['MIT License','Apache License 2.0','GPL License (aka GNU General Public License v3.0)',' BSD License(2-clause)','BSD License(3-clause)','BSD License(4-claus)']
        }
        
        
        ])
        .then((responses) => {
            console.log(responses);
        
            fs.writeFile("log.md",  generateMarkdown(responses), (err) => {
                if (err)
                  console.log(err);
                else {
                  console.log("File written successfully\n");
                }
              });
        });

       
}

// Function call to initialize app
init();
