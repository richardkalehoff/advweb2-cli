#!/usr/bin/env node
'use strict';

const program = require('commander');

program
    .version('0.0.1')
    .command('grade', 'setup the grading files for an assignment')
    .parse(process.argv);
