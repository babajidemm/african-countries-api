# African Countries API

A Node.js library for querying African country data (including cities with more than 500 inhabitants) from a local bundled dataset.

It is useful when you want country lookup features without managing your own country JSON files.

## Who is this for?

- **Developers** who need country metadata (name, region, languages, codes, borders, phone codes, etc.) in backend or tooling scripts.
- **Non-dev users** who want quick copy-paste examples and simple command-line usage with Node.js.

## Install

```sh
npm i @babajidemm/african-countries-api
```

Requires Node.js (LTS recommended).

## Quick Start (Developer)

```js
const api = require('@babajidemm/african-countries-api');

const result = api.byName('Algeria');

if (result.statusCode === 200) {
  const countries = JSON.parse(result.body.toString());
  console.log(countries[0].cca2); // DZ
}
```

## Quick Start (Non-Developer / CLI)

After installing in a folder, run:

```sh
node -e "const api=require('@babajidemm/african-countries-api'); const r=api.byCapital('Accra'); console.log(r.statusCode); console.log(r.body.toString());"
```

This prints status code and the matching JSON array.

## Response Format

Every method returns an `http-response-object` style response:

- `statusCode` (number)
- `headers` (object)
- `body` (Buffer for success/not-found responses)
- `url` (undefined)

Typical status codes:

- `200` → found result(s)
- `404` → no matches
- `400` → invalid input shape for methods that require strict input (example: `byCoordinates` with non-array input)

## API Methods

| Method | Description | Example Input |
|---|---|---|
| `all()` | Return all African countries | none |
| `byName(name)` | Match common or official country name | `'Algeria'` |
| `byCountryCode(code)` | Match CCA2 code | `'DZ'` |
| `byISOAlpha3CountryCode(code)` | Match CCA3 code | `'DZA'` |
| `byISONumericCountryCode(code)` | Match numeric country code | `'012'` |
| `byOlympicCommiteeCode(cioc)` | Match IOC code | `'ALG'` |
| `byCurrency(currency)` | Match currency symbol/code | `'DZD'` |
| `byBorder(border)` | Match neighboring country code | `'TUN'` |
| `byLanguage(language)` | Match language value (not key) | `'Arabic'` |
| `byLatitude(lat)` | Match latitude | `28` |
| `byLongitude(lng)` | Match longitude | `3` |
| `byCoordinates([lat, lng])` | Match exact coordinate pair | `[28, 3]` |
| `byCapital(capital)` | Match capital city | `'Algiers'` |
| `byPhoneCode(phoneCode)` | Match calling code | `'213'`, `'+213'`, `213` |
| `byRegion(region)` | Match region | `'Africa'` |
| `bySubregion(subregion)` | Match subregion | `'Northern Africa'` |
| `byDemonym(demonym)` | Match demonym | `'Algerian'` |
| `byAlternativeName(altName)` | Match alternative spellings | `'Dzayer'`, `'Algérie'` |
| `byTopLevelDomain(tld)` | Match TLD | `'dz'` or `'.dz'` |

## Input Notes & Edge Cases

- Most string lookups are case-sensitive.
- `byPhoneCode` normalizes `+` signs and numeric-like values (for example `'+213'`, `'0213'`, and `213` resolve correctly).
- `byCoordinates` requires an array; non-array input returns `400`.
- `byTopLevelDomain` accepts either `'dz'` or `'.dz'` and normalizes to dot-prefixed format internally.

## Local Development

```sh
npm install
npm test
```

Coverage report command:

```sh
npm run coverage
```

## Data Source

- Cities data: [geonames.org](http://www.geonames.org/)
- Country data origin reference: [restcountries.eu/rest/v2/all](https://restcountries.eu/rest/v2/all)

Dataset note: the bundled data snapshot was last updated in **July 2020**.

## Deno

Also available on Deno:
https://deno.land/x/africancountriesapi@1.1.4

## Contributing

- Contributors: https://github.com/babajidemm/african-countries-api/graphs/contributors
- Contribution guide: [CONTRIBUTING](./CONTRIBUTING.md)

## License

MIT. See [LICENSE](./LICENSE).
