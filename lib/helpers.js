'use strict';

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

module.exports = {
    extractData: extractData
};
