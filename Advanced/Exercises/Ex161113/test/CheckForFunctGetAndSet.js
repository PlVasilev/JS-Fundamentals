let expect = require('chai').expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe("Sorted List",function () {

    it("should have all of the functions in it's prototype", function() {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found.");
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found.");
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found.");
    });

    it("should have size property getter", function() {
        let sortedList = new SortedList();
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, "Property size was not found.");
        expect(typeof sortedList.size).to.not.equal('function', "Property size should not be a function.");
    });
    it('should return a []', function () {
        let sortedList = new SortedList();
       expect(sortedList.list).to.be.eql([])
    });
    it('should add lelemnt', function () {
        let sortedList = new SortedList();
        sortedList.add(5);
        sortedList.add(4);
        sortedList.add(6);
        expect(sortedList.list).to.be.eql([4,5,6])
    });
    it('should remove element', function () {
        let sortedList = new SortedList();
        sortedList.add(5);
        sortedList.add(4);
        sortedList.remove(1);
        sortedList.add(-1);
        sortedList.add(10);
        sortedList.remove(2)
        expect(sortedList.list).to.be.eql([-1,4])
    });
    it('should return the element of a position', function () {
        let sortedList = new SortedList();
        sortedList.add(5);
        sortedList.add(4);
        expect(sortedList.get(1)).to.be.eql(5)
    });
   it('should throw error', function () {
       let sortedList = new SortedList();
       sortedList.add(5);
       sortedList.add(4);
       expect(() => sortedList.remove(-1)).to.throw(Error);
   });
   it('should throw error', function () {
       let sortedList = new SortedList();
       sortedList.add(5);
       sortedList.add(4);
       expect(() => sortedList.remove(2)).to.throw(Error);
   });
   it('should throw error', function () {
       let sortedList = new SortedList();
       expect(() => sortedList.remove(0)).to.throw(Error);
    });
    it('should throw error', function () {
        let sortedList = new SortedList();
        sortedList.add(5);
        sortedList.add(4);
        expect(() => sortedList.get(-1)).to.throw(Error);
    });
    it('should throw error', function () {
        let sortedList = new SortedList();
        sortedList.add(5);
        sortedList.add(4);
        expect(() => sortedList.get(2)).to.throw(Error);
    });
    it('should throw error', function () {
        let sortedList = new SortedList();
        expect(() => sortedList.get(0)).to.throw(Error);
    });
    it('should get size', function () {
        let sortedList = new SortedList();
        expect(sortedList.size).to.be.equal(0, "Empty collection had wrong size.");
        sortedList.add(5);
        sortedList.add(4);
        expect(sortedList.size).to.be.equal(2);
    });
})