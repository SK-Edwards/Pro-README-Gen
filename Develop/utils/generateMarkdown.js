// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(value){

  if (value === "BSD 3-Clause License") {
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  } else if (value === "GNU GPLv3") {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (value === "BSD 2-Clause License") {
      return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
  } else if (value === "Apache License 2.0") {
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
   } else if (value === "The MIT License") {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if ("Eclipse Public License 1.0"){
    return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
   } else if ("Mozilla Public License 2.0"){
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
   } else {
      return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(value){
  
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
  } else if ("Eclipse Public License 1.0"){
    return "(https://opensource.org/licenses/EPL-1.0)"
  } else if ("Mozilla Public License 2.0"){
    return "(https://opensource.org/licenses/MPL-2.0)"
  } else {
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(value) { 
  
//          renderLicenseBadge(value);{
//             value = data.License
//           };
//           renderLicenseLink(value);{
//             value = data.License
//           };
//         }
                      
    

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title
  ${data.Title}
  
  ${renderLicenseBadge(data.License)}
  
  
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
   
  ${renderLicenseLink(data.License)}
  `;
}

module.exports = generateMarkdown