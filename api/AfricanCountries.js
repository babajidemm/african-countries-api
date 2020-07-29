"use strict";

require("../version");

const CountriesService = require("./" + API_VERSION + "/lib/CountriesService");

module.exports = {
    /**
     * @api {get} all Request for all African countries
     * @apiName all
     *
     * @apiParam <none>.
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     * @apiSuccessExample {Buffer} Success-Response:
     *     HTTP/1.1 200 OK
     *      Buffer<[{
     *              "name": {
     *                  "common": "Algeria",
     *                  "official": "People's Democratic Republic of Algeria",
     *                  ...
     *                  },
     *              ...
     *              "cioc": "ALG",
     *              ...
     *              }
     *          ]>
     *
     * @apiErrorExample {Buffer} Error-Response:
     *     HTTP/1.1 404 Not Found
     *     Buffer <{}>
     *
     * @apiErrorExample {Buffer} Error-Response:
     *     HTTP/1.1 400 Error
     */
    all: () => CountriesService.all(),
    /**
     * @api {get} byName Request country by unique name
     * @apiName byName
     *
     * @apiParam name {String} Mandatory Name
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byName: (name) => CountriesService.byName(name),
    /**
     * @api {get} byCountryCode Request country by unique (CCA2) code
     * @apiName byCountryCode
     *
     * @apiParam code {String} Mandatory Code
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byCountryCode: (code) => CountriesService.byCCA2(code),
    /**
     * @api {get} byISOAlpha3CountryCode Request country by unique ISO3166-1 numeric (CCA3) code
     * @apiName byISOAlpha3CountryCode
     *
     * @apiParam code {String} Mandatory 3166-1 alpha-3 (CCA3) Code
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byISOAlpha3CountryCode: (code) => CountriesService.byCCA3(code),
    /**
     * @api {get} byISONumericCountryCode Request country by unique name
     * @apiName byISONumericCountryCode
     *
     * @apiParam code {String} Mandatory ISO3166-1 numeric (CCN3) Code
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byISONumericCountryCode: (code) => CountriesService.byCCN3(code),
    /**
     * @api {get} byOlympicCommiteeCode Request country by the unique International Olympic Committee (IOC) code
     * @apiName byOlympicCommiteeCode
     *
     * @apiParam cioc {String} Mandatory International Olympic Committee (IOC) code
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byOlympicCommiteeCode: (cioc) => CountriesService.byCIOC(cioc),
    /**
     * @api {get} byCurrency Request country by currency name or symbol
     * @apiName byCurrency
     *
     * @apiParam currency {String} Mandatory currency name or symbol
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byCurrency: (currency) => CountriesService.byCurrency(currency),
    /**
     * @api {get} byBorder Request country by one of its borders
     * @apiName byBorder
     *
     * @apiParam border {String} Mandatory border
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byBorder: (border) => CountriesService.byBorder(border),
    /**
     * @api {get} byLanguage Request country by a language spoken in her
     * @apiName byLanguage
     *
     * @apiParam language {String} Mandatory language
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byLanguage: (language) => CountriesService.byLanguage(language),
    /**
     * @api {get} byLatitude Request country by her latitutde
     * @apiName byLatitude
     *
     * @apiParam lat {Number} Mandatory latitutde number
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byLatitude: (lat) => CountriesService.byLatitude(lat),
    /**
     * @api {get} byLongitude Request country by longitude
     * @apiName byLongitude
     *
     * @apiParam lng {Number} Mandatory longitude number
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byLongitude: (lng) => CountriesService.byLongitude(lng),
    /**
     * @api {get} byCoordinates Request country by coordinates (Number[2])
     * @apiName byCoordinates
     *
     * @apiParam coordinates {Number[]} Mandatory coordinates as array of numbers (format: [lat, lng] e.g [28, 3] for Algeria)
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byCoordinates: (coordinates) => CountriesService.byCoordinates(coordinates),
    /**
     * @api {get} byCapital Request country by capital name
     * @apiName byCapital
     *
     * @apiParam capital {String} Mandatory capital
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byCapital: (capital) => CountriesService.byCapital(capital),
    /**
     * @api {get} byPhoneCode Request country by phoneCode
     * @apiName byPhoneCode
     *
     * @apiParam phoneCode {Number} Mandatory phoneCode
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byPhoneCode: (phoneCode) => CountriesService.byPhoneCode(phoneCode),
    /**
     * @api {get} byRegion Request country by region name
     * @apiName byRegion
     *
     * @apiParam region {String} Mandatory region
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byRegion: (region) => CountriesService.byRegion(region),
    /**
     * @api {get} bySubregion Request country by subregion name
     * @apiName bySubregion
     *
     * @apiParam subregion {String} Mandatory subregion
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    bySubregion: (subregion) => CountriesService.bySubregion(subregion),
    /**
     * @api {get} byDemonym Request country by demonym
     * @apiName byDemonym
     *
     * @apiParam demonym {String} Mandatory demonym
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byDemonym: (demonym) => CountriesService.byDemonym(demonym),
    /**
     * @api {get} byAlternativeName Request country by alternative names e.g "DZ","Dzayer","Algérie" for Algeria
     * @apiName byAlternativeName
     *
     * @apiParam altName {String} Mandatory alternative name
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byAlternativeName: (altName) => CountriesService.byAlternativeName(altName),
    /**
     * @api {get} byTopLevelDomain Request country by top level domain code
     * @apiName byTopLevelDomain
     *
     * @apiParam tld {String} Mandatory top level domain code
     *
     * @apiSuccess {Number}   response.statusCode  Response status code. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
     * @apiSuccess {Buffer[]}  response.body  Buffer of array containing country objects. See https://nodejs.org/api/buffer.html
     *
     */
    byTopLevelDomain: (tld) => CountriesService.byTopLevelDomain(tld),
};