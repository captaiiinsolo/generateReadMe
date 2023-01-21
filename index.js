// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please wite a short description of your project -", "What kind of license should your project have?", "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?"];

const [username, email, projectName, description, license, dependencies, tests, repoUsage, contributing] = questions;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the ReadMe Generator. Please follow the following prompts");
    inquirer
        .prompt([
            {
                type: "input",
                name: "username",
                message: username
            },

            {
                type: "input",
                name: "email",
                message: email
            },

            {
                type: "input",
                name: "projectName",
                message: projectName
            },

            {
                type: "input",
                name: "description",
                message: description
            },

            {
                type: "list",
                name: "license",
                message: license,
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
            }
        ])

        .then(function(response) {
            console.log(response.username);
            console.log(response.email);
            console.log(response.projectName);
            console.log(response.description);
            console.log(response.license);
            
        });
}

// Function call to initialize app
init();
