let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("even/odd function tests",function () {
    it('Should return even for ab', function () {expect(isOddOrEven('ab')).to.be.equal('even')});
    it('Should return odd for aba', function () {expect(isOddOrEven('aba')).to.be.equal('odd')});
    it('Should return undefined for 13', function () {expect(isOddOrEven(13)).to.be.equal(undefined)});
    it('Should return undefined for {name: george}', function () {expect(isOddOrEven({name: 'george'})).to.be.equal(undefined)});
    it('Should return odd for aba, even for abab,odd for a', function () {
        expect(isOddOrEven('aba')).to.be.equal('odd');
        expect(isOddOrEven('abab')).to.be.equal('even');
        expect(isOddOrEven('a')).to.be.equal('odd');
    });
});