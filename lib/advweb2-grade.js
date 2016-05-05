'use strict';

const program = require('commander');

program
    .arguments('<assignment>')
    .option('-p, --pick', 'Select the assignment')
    .parse(process.argv);

if (program.pick) {
    console.log('output list');
    console.log(program);
}
