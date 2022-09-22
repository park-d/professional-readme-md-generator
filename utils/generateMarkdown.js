// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "GNU AGPL v3":
      return `(https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    case "GNU GPL v3":
      return `(https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case "GNU LGPL v3":
      return `(https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
    case "Mozilla Public License 2.0":
      return `(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case "Apache License 2.0":
      return `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "The MIT License":
      return `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "Boost Software License 1.0":
      return `(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    case "The Unlicense":
      return `(https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    default:
      return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation

## Usage 

## Credits

## License

## Contributing

## Tests

## Questions

- GitHub: 
- Email:
`;
}

module.exports = generateMarkdown;
