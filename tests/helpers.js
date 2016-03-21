'use strict';

var expect = require('chai').expect;
var helpers = require('../lib/helpers');

describe('advweb2', function () {

    it('extracts student GitHub info from data file', function () {
        var studentFile = `https://github.com/richardkalehoff%kalehoff_richard
https://github.com/allisonkalehoff%kalehoff_allison
https://github.com/jackjoynt%joynt_jack`;

        var studentData = helpers.extractData(studentFile);

        expect(studentData).to.deep.equal([
            { githubUrl: 'https://github.com/richardkalehoff', name: 'kalehoff_richard' },
            { githubUrl: 'https://github.com/allisonkalehoff', name: 'kalehoff_allison' },
            { githubUrl: 'https://github.com/jackjoynt', name: 'joynt_jack' }
        ]);
    });

});
