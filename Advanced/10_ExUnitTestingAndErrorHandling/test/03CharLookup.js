let expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe("charAtIndex function tests",function () {
    it('Should return undefined for 11 and 1', function () {expect(lookupChar(11,2)).to.be.equal(undefined)});
    it('Should return undefined for "abc" and "a"', function () {expect(lookupChar('abc','a')).to.be.equal(undefined)});
    it('Should return Incorrect index for "123456" and -1', function () {expect(lookupChar('123456', -1)).to.be.equal('Incorrect index')});
    it('Should return Incorrect index for "123456" and 6', function () {expect(lookupChar('123456', 6)).to.be.equal('Incorrect index')});
    it('Should return undefined index for "123456" and 5.14', function () {expect(lookupChar('123456', 5.14)).to.be.equal(undefined)});
    it('Should return 6 for "123456" and 5', function () {expect(lookupChar("123456",5)).to.be.equal('6')});
    it('Should return 1 for "123456" and 0', function () {expect(lookupChar("123456",0)).to.be.equal('1')});
});