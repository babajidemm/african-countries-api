const should = require('should');
const assert = require('assert');

const AfricanCountries = require('../index.js')

describe('AfricanCountries', () => {
    describe('#all()', () => {
        it('should return valid response with code 200 and a Buffer body', () => {
            const result = AfricanCountries.all()

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            body.should.be.a.Object();
            body.should.be.Buffer

            body = body.toString();
            should.exist(body);
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.a.Object();
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(58)
            let rrr = [];
            bodyJSON.forEach(function (c) {
                var name = c['cca3']
                if (!rrr.includes(name)) {
                    rrr.push(name)
                }
            });
            rrr.should.have.lengthOf(bodyJSON.length)
        });
    });

    describe('#byName(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byName('NotACountry');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byName when found (common name)', () => {
            const result = AfricanCountries.byName('Algeria');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            const firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });

        it('should return correct country list byName when found (official name)', () => {
            const result = AfricanCountries.byName('People\'s Democratic Republic of Algeria');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            const firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });
    });

    describe('#byCountryCode(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byCountryCode('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byCountryCode when found', () => {
            const result = AfricanCountries.byCountryCode('DZ');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            const firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });
    });

    describe('#byISOAlpha3CountryCode(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byISOAlpha3CountryCode('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byISOAlpha3CountryCode when found', () => {
            const result = AfricanCountries.byISOAlpha3CountryCode('DZA');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            const firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });
    });

    describe('#byOlympicCommiteeCode(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byOlympicCommiteeCode('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byOlympicCommiteeCode when found', () => {
            const result = AfricanCountries.byOlympicCommiteeCode('ALG');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            const firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });
    });

    describe('#byISONumericCountryCode(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byISONumericCountryCode('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byISONumericCountryCode when found', () => {
            const result = AfricanCountries.byISONumericCountryCode('012');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            const firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });
    });
    describe('#byCurrency(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byCurrency('fakeCurrency');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byCurrency (DZD) when found', () => {
            const result = AfricanCountries.byCurrency('DZD');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });

        it('should return correct country list byCurrency (DA) when found', () => {
            const result = AfricanCountries.byCurrency('DA');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byBorder(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byBorder('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byBorder', () => {
            const result = AfricanCountries.byBorder('TUN');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byLanguage(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byLanguage('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byLanguage', () => {
            const result = AfricanCountries.byLanguage('Arabic');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byLatitude(Number)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byLatitude('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byLatitude (string)', () => {
            const result = AfricanCountries.byLatitude('28');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });

        it('should return correct country list byLatitude (number)', () => {
            const result = AfricanCountries.byLatitude(28);

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });

        it('should return correct country list byLatitude (negative number)', () => {
            const result = AfricanCountries.byLatitude(-3.5);

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
        it('should return correct country list byLatitude (negative string number)', () => {
            const result = AfricanCountries.byLatitude("-3.5");

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byLongitude(Number)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byLongitude('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byLongitude (string)', () => {
            const result = AfricanCountries.byLongitude('3');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });

        it('should return correct country list byLongitude (number)', () => {
            const result = AfricanCountries.byLongitude(3);

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byCoordinates(Number[])', () => {
        it('should return error if provided argument is not of type array', () => {
            var result = AfricanCountries.byCoordinates('3');
            result.should.have.property('statusCode', 400).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);
            result.should.have.property('body', undefined);

            result = AfricanCountries.byCoordinates('3', '4');
            result.should.have.property('statusCode', 400).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);
            result.should.have.property('body', undefined);

            result = AfricanCountries.byCoordinates(3, 4);
            result.should.have.property('statusCode', 400).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);
            result.should.have.property('body', undefined);
        });

        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byCoordinates(['blob', 'blob']);

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byCoordinates (number)', () => {
            const result = AfricanCountries.byCoordinates([28, 3]);

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byCapital(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byCapital('blob');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byCapital when found', () => {
            const result = AfricanCountries.byCapital('Algiers');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            const firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });
    });

    describe('#byPhoneCode(String/Number)', () => {
        it('should return empty array when no correct parameter is provided is found', () => {
            const result = AfricanCountries.byPhoneCode('blob');

            result.should.have.property('statusCode', 400).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);
            result.should.have.property('body', undefined);
        });

        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byPhoneCode('98765');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byPhoneCode when found', () => {
            var result = AfricanCountries.byPhoneCode('213');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            var body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            var bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            var firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');

            result = AfricanCountries.byPhoneCode('+213');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.should.have.lengthOf(1)

            firstResult = bodyJSON[0]
            should.exist(firstResult);
            firstResult.should.have.property('name').have.property('common').eql('Algeria');
            firstResult.should.have.property('name').have.property('official').eql('People\'s Democratic Republic of Algeria');
            firstResult.should.have.property('cca2', 'DZ');
        });
    });

    describe('#byRegion(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byRegion('blobRegion');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byRegion', () => {
            const result = AfricanCountries.byRegion('Africa');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#bySubregion(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.bySubregion('blobSubRegion');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list bySubregion', () => {
            const result = AfricanCountries.bySubregion('Northern Africa');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byDemonym(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byDemonym('blobDemonym');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byDemonym', () => {
            const result = AfricanCountries.byDemonym('Algerian');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byAlternativeName(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byAlternativeName('blobAltName');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byAlternativeName', () => {
            const result = AfricanCountries.byAlternativeName('Dzayer');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });

    describe('#byTopLevelDomain(String)', () => {
        it('should return empty array when no result is found', () => {
            const result = AfricanCountries.byTopLevelDomain('blobTopLevelDomain');

            result.should.have.property('statusCode', 404).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            let exp = () => JSON.parse(body);
            exp.should.not.throw()
            exp = exp();
            should.exist(exp);
            exp.should.be.Array
            exp.should.be.empty()
            exp.should.have.lengthOf(0)
        });

        it('should return correct country list byTopLevelDomain', () => {
            const result = AfricanCountries.byTopLevelDomain('dz');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });

        it('should return correct country list byTopLevelDomain (with dot)', () => {
            const result = AfricanCountries.byTopLevelDomain('.dz');

            result.should.have.property('statusCode', 200).and.be.a.Number();
            result.should.have.property('headers', {});
            result.should.have.property('url', undefined);

            should.exist(result);
            result.should.be.a.Object();
            result.should.be.an.instanceOf(Object)

            let body = result.body
            should.exist(body);
            result.should.be.a.Object();
            result.should.be.Buffer

            body = body.toString();
            body.should.be.String

            const bodyJSON = JSON.parse(body);
            should.exist(bodyJSON);
            bodyJSON.should.be.Array
            bodyJSON.length.should.be.above(0)
        });
    });
});