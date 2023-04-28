// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

function getLicense(value) {
  if (value === "BSD 3-Clause License") {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (value === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (value === "BSD 2-Clause License") {
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
  } else if (value === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
   } else if (value === "The MIT License") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else {
      return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){}
    function getLicense(value) {
  if (value === "BSD 3-Clause License") {
      return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (value === "GNU GPLv3") {
      return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "BSD 2-Clause License") {
      return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (value === "Apache 2.0") {
      return "(https://opensource.org/licenses/Apache-2.0)";
   } else if (value === "The MIT License") {
      return "(https://opensource.org/licenses/MIT)";
  } else {
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    function getLicense(value) {
        if (value === data.License){
            
          generateMarkdown.renderLicenseBadge()
           generateMarkdown.renderLicenseLink()
        }
                      
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title
  ${data.Title}
  
  
  
  # Table of Contents
  * [Description](#-Description)
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [Contributing](#-Contributing)
  * [Credits](#-Credits)
  * [License](#-Installation)
      
  # Description
  ${data.Description}

  # Installation
  ${data.Installation}
  
  # Usage
  ${data.Usage}

  # Contributing 
  ${data.Contributing}

  # Credits
  ${data.Credits}

   # License 
  ${data.License}
   
  `;
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};