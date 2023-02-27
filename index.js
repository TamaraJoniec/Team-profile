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
    {
        type: 'list',
        name: 'Add staff members',
        message: "Would you like to add any other members of staff?",
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    },
    {
        type: 'input',
        name: 'Title',
        message: "What's the engineer's name?",
    },
    {
        type: 'input',
        name: 'ID',
        message: "What's the engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'Email',
        message: "What's the engineer's email?",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: "What's the engineer's GitHub username?",
    },
    {
        type: 'input',
        name: 'Title',
        message: "What's the intern's name?",
    },
    {
        type: 'input',
        name: 'ID',
        message: "What's the intern's employee ID?",
    },
    {
        type: 'input',
        name: 'Email',
        message: "What's the intern's email?",
    },
    {
        type: 'input',
        name: 'School',
        message: "What's the intern's school called?",
    }
]);

const employees = [Engineer, Intern, Manager];
const html = render(employees);
fs.writeFileSync(outputPath, html);
