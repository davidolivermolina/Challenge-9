// utils/generateMarkdown.js
function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  // ... (additional sections and content based on user input)
    `;
  }
  
  // Exporting the function
  module.exports = generateMarkdown;

  