// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  
}


function parseInfo(data){
  const list = data.split(',');
  let retVal =``;
  for(let i =0; i < list.length; i++){
    retVal +="- " + list[i] + "\n";
  }
  return retVal;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  ##Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##Contributors
  ${parseInfo(data.collaborators)}
  ##Guidelines
  ${data.features}
  ##Tests
  ${data.test}

`;
}

module.exports = generateMarkdown;
