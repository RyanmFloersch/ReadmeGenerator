// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is the project title?",
    "Descripe the project?",
    "What are the installation steps?",
    "Please provide usage instructions?",
    "Please list your collaborators? Pleae make a list using ',' to seperate the collaborators.",
    "What badges do you have?",
    "What features does your project have?",
    "How can people contribute to your project? ",
    "What test did you run?",
    "What is your github username?",
    "What is your email?"

];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var markdownStr = generateMarkdown(data);

    fs.writeFile(fileName, markdownStr,(err)=>{
        if(err)
            return console.log(err);
        console.log('file written successfully!');
    });

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt([
        {
            name: 'title',
            message: questions[0]
        },
        {
            name: 'description',
            message: questions[1]
        },
        {
            name: 'installation',
            message: questions[2]
        },
        {
            name: 'usage',
            message: questions[3]
        },
        {
            name: 'collaborators',
            message: questions[4]
        },
        {
            name: 'badge',
            type: 'list',
            message: questions[5],
            choices: ["MIT", "Apache", "Creative_Commons","GNU", "IBM"]
        },
        {
            name: 'features',
            message: questions[6]
        },
        {
            name: 'contribution',
            message: questions[7]
        },
        {
            name: 'tests',
            message: questions[8]
        },
        {
            name: 'username',
            message: questions[9]
        },
        {
            name: 'email',
            message: questions[10]
        }
    ]).then((answerObj) => {
        // console.log(answerObj);
        writeToFile('./README.md', answerObj);
    });    


    
}

// Function call to initialize app
init();
