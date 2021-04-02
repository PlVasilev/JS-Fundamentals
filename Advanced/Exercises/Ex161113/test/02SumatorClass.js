let expect = require('chai').expect;

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}
describe("Exam 170723", function() {
    it('has functions attached to prototype', function () {
        let sumator = new Sumator();
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('add')).to.equal(true, "Missing append function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums')).to.equal(true, "Missing prepend function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter')).to.equal(true, "Missing insertAt function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('toString')).to.equal(true, "Missing remove function");
    });
    it("initialize with empty ", function() {
        let sumator = new Sumator();
        expect(sumator.data).to.eql([]);
        expect(sumator.toString()).to.eql('(empty)');
        expect(sumator.sumNums()).to.equal(0)
    });
    it("initialize with empty ", function() {
        let sumator = new Sumator();
        sumator.add(1);
        sumator.add('1');
        sumator.add(1.23);
        sumator.add(2)
        sumator.add('one')
        expect(sumator.toString()).to.be.equal('1, 1, 1.23, 2, one');
        expect(sumator.sumNums()).to.equal(4.23)
    });
    it("initialize with empty ", function() {
        let sumator = new Sumator();
        sumator.add(1);
        sumator.add('1');
        sumator.add(1.23);
        sumator.add(2)
        sumator.add('one')
        sumator.removeByFilter(x => x % 2 === 0);
        expect(sumator.toString()).to.be.equal('1, 1, 1.23, one');
        expect(sumator.sumNums()).to.equal(2.23)
    });

});
