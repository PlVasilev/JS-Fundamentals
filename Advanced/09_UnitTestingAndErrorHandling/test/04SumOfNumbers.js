const expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe("Sum function tests",function () { // "" name of tests fo the function
    it('Should return 6 for [1,2,3]', function () { // ""good practice is to write what the test does
       // Arrange
       let array = [1,2,3];
       // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(6)  // expect = const expect
    });

    it('Should return 1 for [1]', function () { // ""good practice is to write what the test does
        // Arrange
        let array = [1];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(1)  // expect = const expect
    });

    it('Should return 3 for [1.5,1.5]', function () { // ""good practice is to write what the test does
        // Arrange
        let array = [1.5,1.5];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(3)  // expect = const expect
    })

    it('Should return -3 for [-1.5,-1.5]', function () { // ""good practice is to write what the test does
        // Arrange
        let array = [-1.5,-1.5];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(-3)  // expect = const expect
    });

    it('Should return 0 for []', function () { // ""good practice is to write what the test does
        // Arrange
        let array = [];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(0)  // expect = const expect
    });

    it('Should return NaN for string', function () { // ""good practice is to write what the test does
        // Arrange
        let array = "string";
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.NaN  // expect = const expect
    });

});