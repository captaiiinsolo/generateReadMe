// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![licenseBadge](https://img.shields.io/badge/license-${license}-red)`
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`
  } return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
This project is licensed under the ${license} license`
  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}

## Technology Used

## Description

${data.description}

## Usage

${data.repoUsage}

${data.dependencies}

${data.tests}

${renderLicenseSection(data.license)}

${data.license}

${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Author Info

${data.username}

${data.email}

  

`;
}

module.exports = generateMarkdown;
