let expect = require("chai").expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe("Create Calculator tests", function () {
    let calc;
    beforeEach(function () {  // преди всеки тест се изпълнява beforeEach има и afterEach
        // Arrange
        calc = createCalculator()
    });

   describe("Add",function () {
       it('should return 0 after initialization', function () {
           let result = calc.get();
           expect(result).to.be.equal(0)
       });
       it('should return 5.14 after add 5.14', function () {
           calc.add(5.14);
           let result =calc.get();
           expect(result).to.be.equal(5.14)
       });
       it('should return 10 after add 5,аdd 5', function () {
           calc.add(5);
           calc.add(5);
           let result = calc.get();
           expect(result).to.be.equal(10)
       });
       it('should return -5 after add -3,add -2', function () {
           calc.add(-3);
           calc.add(-2);
           let result = calc.get();
           expect(result).to.be.equal(-5)
       });
       it('should return 10 after add "5",аdd "5"', function () {
           calc.add('5');
           calc.add('5');
           let result = calc.get();
           expect(result).to.be.equal(10)
       });
       it('should return NaN after add "a"', function () {
           calc.add('a');
           let result = calc.get();
           expect(result).to.be.NaN
       });
   });
    describe("Subtract",function () {
        it('should return -5.14 after subtract 5.14', function () {
            calc.subtract(5.14);
            let result =calc.get();
            expect(result).to.be.equal(-5.14)
        });
        it('should return -10 after subtract 5,subtract 5', function () {
            calc.subtract(5);
            calc.subtract(5);
            let result = calc.get();
            expect(result).to.be.equal(-10)
        });
        it('should return 5 after subtract -3,subtract -2', function () {
            calc.subtract(-3);
            calc.subtract(-2);
            let result = calc.get();
            expect(result).to.be.equal(5)
        });
        it('should return 5 after subtract "-3",subtract "-2"', function () {
            calc.subtract('-3');
            calc.subtract('-2');
            let result = calc.get();
            expect(result).to.be.equal(5)
        });
        it('should return NaN after subtract "a"', function () {
            calc.subtract('a');
            let result = calc.get();
            expect(result).to.be.NaN
        });
    });
    describe("Subtract and Add",function () {
        it('should return 0 after subtract 5.14 and add 5,14', function () {
            calc.subtract(5.14);
            calc.add(5.14);
            let result =calc.get();
            expect(result).to.be.equal(0)
        });
        it('should return 0 after subtract 5.14 and add 5,14', function () {
            calc.subtract(5.14);
            calc.add(5.14);
            calc.add(5.14);
            let result =calc.get();
            expect(result).to.be.equal(5.14)
        });
        it('should return 0 after subtract 5.14 and add 5,14', function () {
            calc.subtract(5.14);
            calc.subtract(5.14);
            calc.add(5.14);
            let result =calc.get();
            expect(result).to.be.equal(-5.14)
        });
    });

});

