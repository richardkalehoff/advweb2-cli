'use strict';

const inquirer = require('inquirer');

function extractData(studentFile) {
    return studentFile.trim().split('\n').map(function (entry) {
        var data = entry.split('%');
        var student = {
            githubUrl: data[0],
            name: data[1]
        };
        return student;
    });
}

function chooseAssignment() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'assignment',
            message: 'Select an assignment',
            choices: ['Git', 'JavaScript', 'MediaQuery', 'Events', 'Transformation', 'Resume', 'Final2', 'Final3'],
            filter: function (val) {
                return val.toLowerCase();
            }
        }
    ]);
}

module.exports = {
    extractData: extractData,
    chooseAssignment: chooseAssignment
};
