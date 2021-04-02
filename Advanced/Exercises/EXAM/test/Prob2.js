let expect = require('chai').expect
class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}
describe("", function() {
    it('should return a []', function () {
        let calc = new Calculator();
        expect(calc.expenses).to.be.eql([])
    });
    it('should return a []', function () {
        let calc = new Calculator();
        expect(calc.toString()).to.be.equal('empty array')
    });
    it('should add everything', function () {
        let calc = new Calculator();
        calc.add(1)
        calc.add(1.234)
        calc.add('one')
        calc.add([1,2])
        expect(calc.toString()).to.be.eql('1 -> 1.234 -> one -> 1,2')
    });
    it('should devide', function () {
        let calc = new Calculator();
        calc.add(8)
        calc.add(4)
        calc.add(2)
        calc.add('one')
        calc.add([1,2])
        expect(calc.divideNums()).to.be.equal(1)
    });
    it('should devide', function () {
        let calc = new Calculator();
        calc.add(8)
        calc.add(4)
        calc.add(0)
        calc.add('one')
        calc.add([1,2])
        expect(calc.divideNums()).to.be.equal('Cannot divide by zero')
    });
    it('should devide', function () {
        let calc = new Calculator();
        calc.add('4')
        calc.add('2')
        calc.add('1')
        calc.add('one')
        calc.add([1,2])
        expect(() => calc.divideNums()).to.throw(Error);
    });
    it('should orderBy', function () {
        let calc = new Calculator();
        calc.add(4)
        calc.add(12)
        calc.add(1)
        calc.add('one')
        calc.add('tow')
        expect(calc.orderBy()).to.be.equal('1, 12, 4, one, tow')
    });
    it('should orderBy', function () {
        let calc = new Calculator();
        calc.add(4)
        calc.add(12)
        calc.add(1)
        expect(calc.orderBy()).to.be.equal('1, 4, 12')
    });

})
