let expect = require('chai').expect;

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();

// describe("tests examPrep 2016 11 07", function () {
//
//
//
//     it('should be empty []', function () {
//         expect(list.toString()).to.equal('')
//     });
//     it('should add one number', function () {
//         list.add(5);
//         expect(list.toString()).to.equal('5')
//     });
//     it('should add multiple different items', function () {
//         list.add(1);
//         list.add('a');
//         let obj = {petur:5}
//         list.add(obj)
//         expect(list.toString()).to.equal('1, a, [object Object]')
//     });
//     it('should del 1', function () {
//         list.add(1);
//         list.add('a');
//         list.delete(1)
//         expect(list.toString()).to.equal('1')
//     });
//     it('should do nothing', function () {
//         list.add(5);
//         list.add('a');
//         list.delete(1)
//         expect(list.delete(0)).to.equal(5)
//     });
//     it('should do nothing', function () {
//         list.add(5);
//         list.add('a');
//         expect(list.delete(-1)).to.equal(undefined)
//     });
//     it('should do nothing', function () {
//         list.add(5);
//         list.add('a');
//         expect(list.delete('a')).to.equal(undefined)
//     });
// });