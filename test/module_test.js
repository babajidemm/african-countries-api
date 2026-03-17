const { describe, it } = require('node:test');
const should = require('should');

const entryPointApi = require('../index.js');
const directApi = require('../api/AfricanCountries');
const apiVersion = require('../version');

describe('Project modules', () => {
    it('should export the expected API version', () => {
        apiVersion.should.eql('v1');
    });

    it('should have entry-point export equal direct API module', () => {
        entryPointApi.should.eql(directApi);
    });
});
