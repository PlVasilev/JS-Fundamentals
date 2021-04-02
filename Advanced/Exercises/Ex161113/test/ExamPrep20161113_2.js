let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe('tests',function () {
        let list;
    beforeEach(() => {
        list = createList()
    });


    describe("has data array", () => {
        it("has empty array", () => {
            expect(list.toString()).to.equal("");
        })
    });

    describe("add wordks", () => {
        it('correct Add ', function () {
            list.add(5);
            list.add(6);
            expect(list.toString()).to.equal("5, 6")
        });
        it('correct Add ', function () {
            list.add({});
            expect(list.toString()).to.equal("[object Object]")
        });
    })
    describe("shiftLetfCorrectrly", () => {
        it ('works', () => {
            list.add(2)
            list.add(3)
            list.shiftLeft()
            expect(list.toString()).to.equal("3, 2")
        });
        it ('works', () => {
            list.add(2)
            list.shiftLeft()
            expect(list.toString()).to.equal("2")
        });

    });
    describe("shiftRight", () => {
        it ('works', () => {
            list.add(2);
            list.add(3);
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.equal("5, 2, 3")
        })
    });
    describe("swapWorks", ()=>{
        it('works', function () {
            list.add(2);
            list.add(3);
            list.add(5);
            expect(list.swap(-1,-4)).to.equal(false);
            expect(list.swap(-1,2)).to.equal(false);
            expect(list.swap("pesho",2)).to.equal(false);
            expect(list.swap(2.5,3)).to.equal(false);
            expect(list.swap(4,3)).to.equal(false);
            expect(list.swap(2,2)).to.equal(false);
            expect(list.swap(0,1)).to.equal(true);
            expect(list.swap(0,3)).to.equal(false);
            expect(list.swap(0)).to.equal(false);

        })
    });
    describe("toString works", ()=>{
        it('works', function () {
            list.add('hi')
            list.add('bye')
            expect(list.toString()).to.equal('hi, bye')
        })
    })
    it('with a negative second index, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.swap(0, -1);
        expect(list.toString()).to.equal("one, two");
    });
})
