'use strict';

const fs = require('fs');
const os = require('os');
const program = require('commander');
const helpers = require('./helpers');

var studentFileName = '.advweb2-students';

program
    .arguments('<assignment>')
    .option('-p, --pick', 'Select the assignment')
    .parse(process.argv);

if (program.pick) {
    console.log('output list');
    console.log(program);
}

var studentFile = os.homedir() + '/' + studentFileName;
var studentFileContent = fs.readFileSync(studentFile, 'utf-8');
helpers.extractData(studentFileContent).forEach(function (student) {
    fs.writeFileSync(student.name + '.md', 'hi', 'utf-8');
});
