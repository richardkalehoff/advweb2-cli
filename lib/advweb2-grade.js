'use strict';

const fs = require('fs');
const program = require('commander');
const helpers = require('./helpers');
const templates = require('./feedbackTemplates');

var assignment;

program
    .arguments('<assignment>')
    .option('-p, --pick', 'Select the assignment')
    .action(function (project) {
        assignment = project.toLowerCase();
    });

program.parse(process.argv);

if (program.pick) {
    helpers.chooseAssignment()
        .then(function (answers) {
            createGradingFilesFor(answers.assignment);
        }
    );
} else {
    createGradingFilesFor(assignment);
}

function createGradingFilesFor(project) {
    var studentFileContent = helpers.getStudentFile();
    helpers.extractData(studentFileContent).forEach(function (student) {
        fs.writeFileSync(student.name + '.md', templates[project], 'utf-8');
    });
}
