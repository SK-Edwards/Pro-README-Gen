// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user inputjs

const questions = [
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
        name: 'Contributing',
        validate: (value) => {if(value){return true} else { return 'Value Required'}}
    },
    {
        type: 'list',
        message: 'What type of license do you have for this project?',
        name: 'License',
        choices: ['MIT License','Apache License 2.0','GNU GPLv3','BSD 2-Clause License','BSD 3-Clause License'],
        validate: (value) => {if(value){return true} else { return 'Value Required'}}
    }
    
    
];
   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,(data), function (err) {
        if (err) {
            return console.log(err);
        }})
}
 
 
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        
    
        writeToFile("./README.md", generateMarkdown({...data}));

})}


// Function call to initialize app
init()
