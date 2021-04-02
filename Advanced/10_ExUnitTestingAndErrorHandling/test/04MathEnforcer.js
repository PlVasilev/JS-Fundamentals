let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        console.log(num + 5)
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("MathEnforcer function tests",function () {
    describe('addFive',function () {
        it('Should return 11 for 6', function () {expect(mathEnforcer.addFive(6)).to.be.equal(11)});
        it('Should return undefined for "6"', function () {expect(mathEnforcer.addFive('6')).to.be.equal(undefined)});
        it('Should return 11.11 for 6.11', function () {expect(mathEnforcer.addFive(6.11)).to.be.equal(11.11)});
        it('Should return 11.11 for -1.11', function () {expect(mathEnforcer.addFive(-6.11)).to.be.closeTo(-1.11, 0.01)});
        it('Should return 11.111111111 for 6.111111111', function () {expect(mathEnforcer.addFive(6.11)).to.be.equal(11.11)});
    });
    describe('subtractTen',function () {
        it('Should return 11 for 21', function () {expect(mathEnforcer.subtractTen(21)).to.be.equal(11)});
        it('Should return undefined for "6"', function () {expect(mathEnforcer.subtractTen('6')).to.be.equal(undefined)});
        it('Should return 6.11 for -3.89', function () {expect(mathEnforcer.subtractTen(6.11)).to.be.closeTo(-3.89, 0.01)});
        it('Should return 6.11 for -16.11', function () {expect(mathEnforcer.subtractTen(-6.11)).to.be.closeTo(-16.11, 0.01)});
    });
    describe('sum',function () {
        it('Should return 16 for 21 and 5', function () {expect(mathEnforcer.sum(21,5)).to.be.equal(26)});
        it('Should return undefined for "6" and 5', function () {expect(mathEnforcer.sum('6',5)).to.be.equal(undefined)});
        it('Should return undefined for  5 and "6" ', function () {expect(mathEnforcer.sum(5, '6')).to.be.equal(undefined)});
        it('Should return undefined for  "5" and "6" ', function () {expect(mathEnforcer.sum('5', '6')).to.be.equal(undefined)});
        it('Should return 10.01 for 6.11 and 3.9', function () {expect(mathEnforcer.sum(6.11,3.9)).to.be.closeTo(10.01, 0.01)});
    });

});