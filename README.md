# african-countries-api

[![Build Status](https://travis-ci.org/babajidemm/african-countries-api.svg?branch=master)](https://travis-ci.org/babajidemm/african-countries-api)
[![buddy pipeline](https://app.buddy.works/babajidemm/african-countries-api/pipelines/pipeline/270922/badge.svg?token=ac2d21420dfe482fff0be7c7521dfb95af44caaefa4731e04a7d097fc559dac5 "buddy pipeline")](https://app.buddy.works/babajidemm/african-countries-api/pipelines/pipeline/270922)
[![babajidemm](https://circleci.com/gh/babajidemm/african-countries-api.svg?style=svg)](https://app.circleci.com/pipelines/github/babajidemm/african-countries-api)

A Node.js library that provides APIs to get useful data about African countries including their cities (with more than 500 inhabitants).

Cities data - copyright [geonames.org](http://www.geonames.org/)
Countries data - copyright [https://restcountries.eu/rest/v2/all](https://restcountries.eu/rest/v2/all)
(**Last uüpdate**: **July 2020**)

## Installation

Download and install node at [nodejs.org](http://nodejs.org).

```sh
npm install african-countries-api --save
```

## Usage

```js
const africanCountriesAPI = require('african-countries-api');

var countriesByName = africanCountriesAPI.byName('Algeria'));
```

It uses (http-response-object)[https://www.npmjs.com/package/http-response-object] as response object.

```js
console.log(countriesByName);
/*
Response {
  statusCode: 200,
  headers: {},
  body: <Buffer 5b 7b 22 6e 61 6d 65 22 3a 7b 22 63 6f 6d 6d 6f 6e 22 3a 22 41 6c 67 65 72 69 61 22 2c ... >,
  url: undefined
}
*/

console.log(countriesByName.statusCode); // 200
console.log(countriesByName.headers); // {}
console.log(countriesByName.body); // <Buffer 5b 7b 22 6e 61 6d 65 22 3a 7b 22 63 6f 6d 6d 6f 6e 22 3a 22 41 6c 67 65 72 69 61 22 2c ... >
console.log(countriesByName.body.toString());
/*
 [
     {
        "name": {
            "common": "Algeria",
            "official": "People's Democratic Republic of Algeria",
            "native": {
                "ara": {
                    "official": "الجمهورية الديمقراطية الشعبية الجزائرية",
                    "common": "الجزائر"
                }
            }
        },
        "tld": [
            ".dz",
            "الجزائر."
        ],
        "cca2": "DZ",
        "ccn3": "012",
        "cca3": "DZA",
        "cioc": "ALG",
        "currencies": [
            "DZD",
            "DA"
        ],
        "callingCode": [
            "213"
        ],
        "capital": "Algiers",
        "altSpellings": [
            "DZ",
            "Dzayer",
            "Algérie"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic",
            "ama": "Amazigh"
        },
        "translations": {...}, 
        "latlong": [
            28,
            3
        ],
        "demonym": "Algerian",
        "landlocked": false,
        "borders": [
            "TUN",
            "LBY",
            "NER",
            "ESH",
            "MRT",
            "MLI",
            "MAR"
        ],
        "area": 2381741,
        "topLevelDomain": [
            ".dz"
        ],
        "regionalBlocs": [
            "AU",
            "AL"
        ],
        "cities": [
            {
                "id": "2474141",
                "name": "Boumerdas",
                "asciiname": "Boumerdas",
                "alternativeNames": [
                    "Bou-Merdes",
                    ...
                    "Cite de Boumerdes",
                    "Cité de Boumerdes",
                    "Le Rocher Noir",
                    "Roche Noire",
                    ...
                    "Бумердес",
                    "أبو مرداس",
                    "الصخرة السوداء",
                    "بو مرداس",
                    ...
                    "مدينة بومرداس"
                ],
                "country": "DZ",
                "altCountry": "",
                "adminCode": "40",
                "population": "786499",
                "timeZone": "Africa/Algiers",
                "lastModified": "2020-06-02"
            },
            ...
        ]
     }
 ]
*/
```

## API Documentation

```js
/**
 * @api {get} all Request for all African countries
 */
all(),
  /**
   * @api {get} byName Request country by unique name
   */
  byName(name),
  /**
   * @api {get} byCountryCode Request country by unique (CCA2) code
   */
  byCountryCode(code),
  /**
   * @api {get} byISOAlpha3CountryCode Request country by unique ISO3166-1 numeric (CCA3) code
   */
  byISOAlpha3CountryCode(code),
  /**
   * @api {get} byISONumericCountryCode Request country by unique name
   */
  byISONumericCountryCode(code),
  /**
   * @api {get} byOlympicCommiteeCode Request country by the unique International Olympic Committee (IOC) code
   */
  byOlympicCommiteeCode(cioc),
  /**
   * @api {get} byCurrency Request country by currency name
   */
  byCurrency(currency),
  /**
   * @api {get} byBorder Request country by one of its borders
   */
  byBorder(border),
  /**
   * @api {get} byLanguage Request country by a language spoken in her
   */
  byLanguage(language),
  /**
   * @api {get} byLatitude Request country by her latitutde
   */
  byLatitude(lat),
  /**
   * @api {get} byLongitude Request country by longitude
   */
  byLongitude(lng),
  /**
   * @api {get} byCoordinates Request country by coordinates (Number[2])
   */
  byCoordinates(coordinates),
  /**
   * @api {get} byCapital Request country by capital name
   */
  byCapital(capital),
  /**
   * @api {get} byPhoneCode Request country by phoneCode
   */
  byPhoneCode(phoneCode),
  /**
   * @api {get} byRegion Request country by region name
   */
  byRegion(region),
  /**
   * @api {get} bySubregion Request country by subregion name
   */
  bySubregion(subregion),
  /**
   * @api {get} byDemonym Request country by demonym
   */
  byDemonym(demonym),
  /**
   * @api {get} byAlternativeName Request country by alternative names e.g "DZ","Dzayer","Algérie" for Algeria
   */
  byAlternativeName(altName),
  /**
   * @api {get} byTopLevelDomain Request country by top level domain code
   */
  byTopLevelDomain(tld);
```

## Tests
```sh
npm install
npm test
```

## Contributions

[Actual list of contributors](https://github.com/babajidemm/african-countries-api/graphs/contributors).

See also [CONTRIBUTING](./CONTRIBUTING.md).

# Dependencies

- [http-response-object](https://www.npmjs.com/package/http-response-object): A simple object to represent an http response (with flow and typescript types)
- [mocha](https://github.com/mochajs/mocha): feature-rich JavaScript test framework running on Node.js
- [underscore](https://github.com/jashkenas/underscore): JavaScript's utility _ belt

## Dev Dependencies

- [should](https://github.com/shouldjs/should.js): BDD style assertions for node.js -- test framework agnostic 
- [split2](https://github.com/mcollina/split2): split a Text Stream into a Line Stream, using Stream 3
- [through2](https://github.com/rvagg/through2): A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise

## License

MIT. See LICENSE for details.
