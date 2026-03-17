# African Countries API

A lightweight Node.js library for querying African country data (including major city data) from a bundled local dataset.

[View on GitHub](https://github.com/babajidemm/african-countries-api) · [NPM Package](https://www.npmjs.com/package/@babajidemm/african-countries-api)

---

## Quick Start

### 1) Install

```sh
npm i @babajidemm/african-countries-api
```

### 2) Use in Node.js

```js
const api = require('@babajidemm/african-countries-api');

const response = api.byName('Algeria');

if (response.statusCode === 200) {
	const countries = JSON.parse(response.body.toString());
	console.log(countries[0].cca2); // DZ
}
```

### 3) Try from terminal

```sh
node -e "const api=require('@babajidemm/african-countries-api');const r=api.byCapital('Accra');console.log(r.statusCode);console.log(r.body.toString());"
```

---

## Response Format

Each method returns an `http-response-object` style result:

- `statusCode`
- `headers`
- `body` (Buffer)
- `url`

Typical status codes:

- `200` → found result(s)
- `404` → no match
- `400` → invalid input shape (for strict methods like `byCoordinates`)

---

## Available Lookups

- `all()`
- `byName(name)`
- `byCountryCode(code)`
- `byISOAlpha3CountryCode(code)`
- `byISONumericCountryCode(code)`
- `byOlympicCommiteeCode(cioc)`
- `byCurrency(currency)`
- `byBorder(border)`
- `byLanguage(language)`
- `byLatitude(lat)`
- `byLongitude(lng)`
- `byCoordinates([lat, lng])`
- `byCapital(capital)`
- `byPhoneCode(phoneCode)`
- `byRegion(region)`
- `bySubregion(subregion)`
- `byDemonym(demonym)`
- `byAlternativeName(altName)`
- `byTopLevelDomain(tld)`

---

## Notes

- Most string lookups are case-sensitive.
- `byPhoneCode` accepts values like `'+213'`, `'0213'`, and `213`.
- `byTopLevelDomain` accepts both `'dz'` and `'.dz'`.

---

## Development

```sh
npm ci
npm test
```

Repository: https://github.com/babajidemm/african-countries-api
