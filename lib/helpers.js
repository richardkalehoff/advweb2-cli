'use strict';

const fs = require('fs');
const os = require('os');
const inquirer = require('inquirer');

function getDefaultStudentFile() {
    return os.homedir() + '/' + '.advweb2-students';
}

function getStudentFile(file) {
    file = file || getDefaultStudentFile();
    return fs.readFileSync(file, 'utf-8');
}

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
    getStudentFile: getStudentFile,
    extractData: extractData,
    chooseAssignment: chooseAssignment
};
