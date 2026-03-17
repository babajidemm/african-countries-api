"use strict";

const Response = require('http-response-object');

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

const addToMapList = (map, key, value) => {
    if (key === undefined || key === null) return;
    if (!map.has(key)) {
        map.set(key, []);
    }
    map.get(key).push(value);
};

const createExactIndex = (countries, getter) => {
    const index = new Map();
    countries.forEach((country) => addToMapList(index, getter(country), country));
    return index;
};

const createArrayIndex = (countries, getter) => {
    const index = new Map();
    countries.forEach((country) => {
        const values = getter(country);
        if (!Array.isArray(values)) return;
        values.forEach((value) => addToMapList(index, value, country));
    });
    return index;
};

const createLanguageIndex = (countries) => {
    const index = new Map();
    countries.forEach((country) => {
        Object.values(country.languages || {}).forEach((language) => {
            addToMapList(index, language, country);
        });
    });
    return index;
};

const createCoordinateIndexes = (countries) => {
    const latIndex = new Map();
    const lngIndex = new Map();
    const pairIndex = new Map();

    countries.forEach((country) => {
        const coordinates = country.latlong;
        if (!Array.isArray(coordinates) || coordinates.length < 2) return;

        const lat = coordinates[0];
        const lng = coordinates[1];

        addToMapList(latIndex, lat, country);
        addToMapList(lngIndex, lng, country);
        addToMapList(pairIndex, `${lat}|${lng}`, country);
    });

    return { latIndex, lngIndex, pairIndex };
};

const findInIndex = (index, key) => index.get(key) || [];

const byCca2Index = createExactIndex(africanCountries, (country) => country.cca2);
const byCca3Index = createExactIndex(africanCountries, (country) => country.cca3);
const byCcn3Index = createExactIndex(africanCountries, (country) => country.ccn3);
const byCiocIndex = createExactIndex(africanCountries, (country) => country.cioc);
const byCapitalIndex = createExactIndex(africanCountries, (country) => country.capital);
const byRegionIndex = createExactIndex(africanCountries, (country) => country.region);
const bySubregionIndex = createExactIndex(africanCountries, (country) => country.subregion);
const byDemonymIndex = createExactIndex(africanCountries, (country) => country.demonym);
const byNameCommonIndex = createExactIndex(africanCountries, (country) => country.name && country.name.common);
const byNameOfficialIndex = createExactIndex(africanCountries, (country) => country.name && country.name.official);

const byCurrencyIndex = createArrayIndex(africanCountries, (country) => country.currencies);
const byBorderIndex = createArrayIndex(africanCountries, (country) => country.borders);
const byAlternativeNameIndex = createArrayIndex(africanCountries, (country) => country.altSpellings);
const byTopLevelDomainIndex = createArrayIndex(africanCountries, (country) => country.topLevelDomain);
const byPhoneCodeIndex = createArrayIndex(africanCountries, (country) => country.callingCode);
const byLanguageIndex = createLanguageIndex(africanCountries);
const { latIndex, lngIndex, pairIndex } = createCoordinateIndexes(africanCountries);


module.exports = {
    all: () => response(africanCountries),
    byName: (name) => response(findInIndex(byNameCommonIndex, name).concat(findInIndex(byNameOfficialIndex, name))),
    byCCA2: (cca2) => response(findInIndex(byCca2Index, cca2)),
    byCCA3: (cca3) => response(findInIndex(byCca3Index, cca3)),
    byCCN3: (ccn3) => response(findInIndex(byCcn3Index, ccn3)),
    byCIOC: (cioc) => response(findInIndex(byCiocIndex, cioc)),
    byCurrency: (currency) => response(findInIndex(byCurrencyIndex, currency)),
    byBorder: (border) => response(findInIndex(byBorderIndex, border)),
    byLanguage: (language) => response(findInIndex(byLanguageIndex, language)),
    byLatitude: (lat) => response(findInIndex(latIndex, parseFloat(lat))),
    byLongitude: (lng) => response(findInIndex(lngIndex, parseFloat(lng))),
    byCoordinates: (coordinates) => (!Array.isArray(coordinates)) ? badRequest() : response(findInIndex(pairIndex, `${coordinates[0]}|${coordinates[1]}`)),
    byCapital: (capital) => response(findInIndex(byCapitalIndex, capital)),
    byPhoneCode: (phoneCode) => {
        const normalizedPhoneCode = String(phoneCode).replace(/\+/gi, '');
        if (isNaN(parseInt(normalizedPhoneCode, 10))) {
            return badRequest();
        }

        const parsedPhoneCode = parseInt(normalizedPhoneCode, 10).toString();
        return response(findInIndex(byPhoneCodeIndex, parsedPhoneCode));
    },
    byRegion: (region) => response(findInIndex(byRegionIndex, region)),
    bySubregion: (subregion) => response(findInIndex(bySubregionIndex, subregion)),
    byDemonym: (demonym) => response(findInIndex(byDemonymIndex, demonym)),
    byAlternativeName: (altName) => response(findInIndex(byAlternativeNameIndex, altName)),
    byTopLevelDomain: (tld) => {
        const topLevelDomain = tld.startsWith('.') ? tld : '.'.concat(tld);
        return response(findInIndex(byTopLevelDomainIndex, topLevelDomain));
    },
}
