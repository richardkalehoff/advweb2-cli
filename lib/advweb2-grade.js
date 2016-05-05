'use strict';

const fs = require('fs');
const os = require('os');
const program = require('commander');
const inquirer = require('inquirer');
const helpers = require('./helpers');
const templates = require('./feedbackTemplates');

var studentFileName = '.advweb2-students';
var assignment;

program
    .arguments('<assignment>')
    .option('-p, --pick', 'Select the assignment')
    .action(function (project) {
        assignment = project.toLowerCase();
    });

program.parse(process.argv);

if (program.pick) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'assignment',
            message: 'What assignment do you want to grade?',
            choices: ['Git', 'JavaScript', 'MediaQuery', 'Events', 'Transformation', 'Resume', 'Final2', 'Final3'],
            filter: function (val) {
                return val.toLowerCase();
            }
        }
    ]).then(function (answers) {
        console.log(answers.assignment);
        createGradingFilesFor(answers.assignment);
    });
} else {
    createGradingFilesFor(assignment);
}

function createGradingFilesFor(project) {
    var studentFile = os.homedir() + '/' + studentFileName;
    var studentFileContent = fs.readFileSync(studentFile, 'utf-8');
    helpers.extractData(studentFileContent).forEach(function (student) {
        fs.writeFileSync(student.name + '.md', templates[project], 'utf-8');
    });
}
