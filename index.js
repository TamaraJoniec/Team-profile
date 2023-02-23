const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


const questions = await inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: "What's the team manager's name?",
    },
    {
        type: 'input',
        name: 'ID',
        message: "What's the team manager's employee ID?",
    },
    {
        type: 'input',
        name: 'Email',
        message: "What's the team manager's email?",
    },
    {
        type: 'input',
        name: 'Office Number',
        message: "What's the team manager's office number?",
    },


])