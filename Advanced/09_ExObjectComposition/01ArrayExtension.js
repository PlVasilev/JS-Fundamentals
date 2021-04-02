let myArr = [1, 1, 1, 0, 2,6];
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    };
    Array.prototype.skip = function (n) {
        return this.slice(n)
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n + 1)
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b)
    };
    Array.prototype.average = function () {
        let sum = this.reduce((a, b) => a + b);
        return sum / this.length
    };
})();
myArr.skip(2);
myArr.take(2);
myArr.sum();
myArr.average();
