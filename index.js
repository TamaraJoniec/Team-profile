import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import inquirer from 'inquirer';
import path from 'path';
import { promises as fs } from 'fs';
import generateTeam from "./src/page-template.js";

const OUTPUT_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), "output");
const outputPath = path.resolve(OUTPUT_DIR, "team.html");
const teamMembers = [];

async function questions() {
    // ask questions to get manager information
    const { name, id, email, officeNumber } = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's the team manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What's the team manager's employee ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What's the team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What's the team manager's office number?",
        },
    ]);

    // create a new Manager instance and add it to the teamMembers array
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);

    let addMore = true;

    while (addMore) {
        const { Employee } = await inquirer.prompt({
            type: "list",
            name: "Employee",
            message: "Which type of employee would you like to add next?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        });

        switch (Employee) {
            case "Engineer":
                const { engName, engId, engEmail, github } = await inquirer.prompt([
                    {
                        type: "input",
                        name: "engName",
                        message: "What's the engineer's name?",
                    },
                    {
                        type: "input",
                        name: "engId",
                        message: "What's the engineer's employee ID?",
                    },
                    {
                        type: "input",
                        name: "engEmail",
                        message: "What's the engineer's email?",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What's the engineer's GitHub username?",
                    },
                ]);

                // create a new Engineer instance and add it to the teamMembers array
                const engineer = new Engineer(engName, engId, engEmail, github);
                teamMembers.push(engineer);
                break;

            case "Intern":
                const { internName, internId, internEmail, school } = await inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "What's the intern's name?",
                    },
                    {
                        type: "input",
                        name: "internId",
                        message: "What's the intern's employee ID?",
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What's the intern's email?",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What's the intern's school called?",
                    },
                ]);

                // create a new Intern instance and add it to the teamMembers array
                const intern = new Intern(internName, internId, internEmail, school);
                teamMembers.push(intern);
                break;

            default:
                addMore = false;
                break;
        }
    }

    const employees = [Manager, Engineer, Intern];
    const html = generateTeam(teamMembers);
    fs.writeFileSync(outputPath, html);
}
questions();
