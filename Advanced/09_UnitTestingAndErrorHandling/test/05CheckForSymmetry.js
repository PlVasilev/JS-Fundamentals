let expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe("Is Symmetcric", function () {
    describe("True tests", function () {
        it("Should return true for [1,2,3,2,1]",function () {
            // Arrange
            let arr = [1,2,3,2,1];
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(true)
        });
        it("Should return true for [-1,-2,-3,-2,-1]",function () {
            // Arrange
            let arr = [-1,-2,-3,-2,-1];
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(true)
        });
        it("Should return true for [3]",function () {
            // Arrange
            let arr = [3];
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(true)
        });
        it("Should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ",function () {
            // Arrange
            let arr =  [5,'hi',{a:5},new Date(),{a:5},'hi',5] ;
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(true)
        });

    });
    describe("False tests", function () {
        it("Should return true for [1,2,3,2,2]",function () {
            // Arrange
            let arr = [1,2,3,2,2];
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(false)
        });
        it("Should return true for [-1,-2,-3,-2,-2]",function () {
            // Arrange
            let arr = [-1,-2,-3,-2,-2];
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(false)
        });
        it("Should return true for [-3,-1]",function () {
            // Arrange
            let arr = [-3,-1];
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(false)
        });
        it("Should return true for [5,'hi',{a:5},new Date(),{X:5},'hi',5] ",function () {
            // Arrange
            let arr =  [5,'hi',{a:5},new Date(),{X:5},'hi',5] ;
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(false)
        });
        it("Should return true for string",function () {
            // Arrange
            let arr =  '1,2,3,4';
            // Arc
            let result = isSymmetric(arr);
            // Assert
            expect(result).to.be.equal(false)
        });
    });
});