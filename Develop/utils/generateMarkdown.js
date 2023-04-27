// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// switch (operation) {
//   case 'sum':
//     console.log(maths.sum(numOne, numTwo));
//     break;
//   case 'difference':
//     console.log(maths.difference(numOne, numTwo));
//     break;
//   case 'product':
//     console.log(maths.product(numOne, numTwo));
//     break;
//   case 'quotient':
//     console.log(maths.quotient(numOne, numTwo));
//     break;
//   default:
//     console.log('Check your maths!');


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// switch (operation) {
//   case 'sum':
//     console.log(maths.sum(numOne, numTwo));
//     break;
//   case 'difference':
//     console.log(maths.difference(numOne, numTwo));
//     break;
//   case 'product':
//     console.log(maths.product(numOne, numTwo));
//     break;
//   case 'quotient':
//     console.log(maths.quotient(numOne, numTwo));
//     break;
//   default:
//     console.log('Check your maths!');


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.Title}

*[Description](#Description)
*[Installation](#Instalation)
*[Usage](#Usage)
*[Contributors](#Contributors)
*[Credits](#Credits)
*[License](#License)

  ## Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Usage 
  ${data.Usage}
  ## Credits 
  ${data.Credits}
  ## Contributors 
  ${data.Contributors}
  ## License
   ${data.License}
`; 
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};