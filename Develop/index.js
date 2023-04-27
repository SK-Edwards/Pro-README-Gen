// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user inputjs


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

//     fs.appendFile("README.md",  generateMarkdown(responses), (err) => {
//                 if (err)
//                 console.log(err);
//               else {
//                 console.log("File written successfully\n");
//               }
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
      inquirer.prompt([
        {   type: 'input',
            message: 'What is the title of your project?',
            name: 'Title',
            validate: (value) => {if(value){return true} else { return 'Value Required'}}
        },
        {
            type: 'input',
            message: 'Please providea brief description of your project.',
            name: 'Description',
            validate: (value) => {if(value){return true} else { return 'Value Required'}}
        },
        
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'Installation',
            validate: (value) => {if(value){return true} else { return 'Value Required'}}
        },
        {
            type: 'input',
            message: 'Provide usage information for your project.',
            name: 'Usage',
            validate: (value) => {if(value){return true} else { return 'Value Required'}}
        }, 
        {   type: 'input',
            message: 'Any credits?',
            name: 'Credits',
            validate: (value) => {if(value){return true} else { return 'Value Required'}}
        },
        {
            type: 'input',
            message: 'Who are the contributors to this project?',
            name: 'Contributors',
            validate: (value) => {if(value){return true} else { return 'Value Required'}}
        },
        {
            type: 'checkbox',
            message: 'What type of license do you have for this project?',
            name: 'License',
            choices: ['MIT License','Apache License 2.0','GPL License (aka GNU General Public License v3.0)',' BSD License(2-clause)','BSD License(3-clause)','BSD License(4-claus)'],
            validate: (value) => {if(value){return true} else { return 'Value Required'}}
        }
        
        
        ])
        .then((responses) => {
            console.log(responses);
          
            fs.appendFile('README.md', JSON.stringify(responses, null, '\t'), (err) =>
            err ? console.error(err) : console.log("All Done!"));
          
                            });
        
                        };
                    
       


// Function call to initialize app
init()
