"use strict";

const Response = require('http-response-object');
const _ = require('underscore')

const africanCountries = require('../data/african_countries.json')

// Helper methods to return valid HTTP responses 
/**
 * Bad request.
 * 
 * @function badRequest
 * 
 * @see https://github.com/ForbesLindesay/http-response-object
 * 
 * @return {Response} Response code 400 From 'http-response-object'
 */
const badRequest = () => new Response(400, {});
/**
 * Empty result.
 * 
 * @function emptyResult
 * 
 * @see https://github.com/ForbesLindesay/http-response-object
 * 
 * @return {Response} Response code 404 From 'http-response-object'
 */
const emptyResult = () => new Response(404, {}, Buffer.from('[]'));
/**
 * Successful request.
 * 
 * @function success
 * 
 * @see https://github.com/ForbesLindesay/http-response-object
 * 
 * @return {Response} Response code 200 From 'http-response-object'
 */
const success = (data) => {
    return new Response(200, {}, Buffer.from(JSON.stringify(data)));
}

const response = (data) => {
    if (data.length <= 0) return emptyResult();
    return success(data);
}

const jsonObjectReducer = (obj, attribute) => obj[attribute];

const singleResult = (list, attribute, value) => {
    let result = _.filter(list, (c) => {
        const nestedValue = attribute.split('.').reduce(jsonObjectReducer, c);
        if (_.isEqual(nestedValue, value)) {
            return c;
        }
    })
    return result;
}

const singleResultFromArray = (list, attribute, value) => _.filter(list, (c) => {
    if (_.contains(c[attribute], value)) {
        return c
    }
})

const singleResultFromArrayByValue = (list, attribute, value) => _.filter(list, (c) => {
    return _(c[attribute]).values().some((v) => {
        return v === value;
    });
});

const singleResultAtIndex = (list, prop, value, index) => _.filter(list, (c) => {
    if (c[prop] && _.isEqual(c[prop][index], value)) {
        return c;
    }
});


module.exports = {
    all: () => response(africanCountries),
    byName: (name) => response(singleResult(africanCountries, 'name.common', name).concat(singleResult(africanCountries, 'name.official', name))),
    byCCA2: (cca2) => response(singleResult(africanCountries, 'cca2', cca2)),
    byCCA3: (cca3) => response(singleResult(africanCountries, 'cca3', cca3)),
    byCCN3: (ccn3) => response(singleResult(africanCountries, 'ccn3', ccn3)),
    byCIOC: (cioc) => response(singleResult(africanCountries, 'cioc', cioc)),
    byCurrency: (currency) => response(singleResultFromArray(africanCountries, 'currencies', currency)),
    byBorder: (border) => response(singleResultFromArray(africanCountries, 'borders', border)),
    byLanguage: (language) => response(singleResultFromArrayByValue(africanCountries, 'languages', language)),
    byLatitude: (lat) => response(singleResultAtIndex(africanCountries, 'latlong', parseFloat(lat), 0)),
    byLongitude: (lng) => response(singleResultAtIndex(africanCountries, 'latlong', parseFloat(lng), 1)),
    byCoordinates: (coordinates) => (!Array.isArray(coordinates)) ? badRequest() : response(singleResult(africanCountries, 'latlong', coordinates)),
    byCapital: (capital) => response(singleResult(africanCountries, 'capital', capital)),
    byPhoneCode: (phoneCode) => (isNaN(parseInt(phoneCode.replace(/\+/gi, '')))) ? badRequest() : response(singleResultFromArray(africanCountries, 'callingCode', (parseInt(phoneCode.replace(/\+/gi, ''))).toString())),
    byRegion: (region) => response(singleResult(africanCountries, 'region', region)),
    bySubregion: (subregion) => response(singleResult(africanCountries, 'subregion', subregion)),
    byDemonym: (demonym) => response(singleResult(africanCountries, 'demonym', demonym)),
    byAlternativeName: (altName) => response(singleResultFromArray(africanCountries, 'altSpellings', altName)),
    byTopLevelDomain: (tld) => (!tld.startsWith('.')) ? response(singleResultFromArray(africanCountries, 'topLevelDomain', '.'.concat(tld))) : response(singleResultFromArray(africanCountries, 'topLevelDomain', tld)),
}
