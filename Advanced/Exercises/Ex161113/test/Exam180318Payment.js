let expect = require('chai').expect;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe("Exam 180318 Payment", function() {
    it("should have all of the functions in it's prototype", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.equal(true, "Function add() was not found.");

    });
    it("should have size property getter", function() {
        let sortedList = new PaymentPackage('a',1);
        expect(PaymentPackage.prototype.hasOwnProperty('name')).to.equal(true, "Property size was not found.");
        expect(typeof sortedList.size).to.not.equal('function', "Property size should not be a function.");
        expect(PaymentPackage.prototype.hasOwnProperty('value')).to.equal(true, "Property size was not found.");
        expect(typeof sortedList.size).to.not.equal('function', "Property size should not be a function.");
        expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.equal(true, "Property size was not found.");
        expect(typeof sortedList.size).to.not.equal('function', "Property size should not be a function.");
        expect(PaymentPackage.prototype.hasOwnProperty('active')).to.equal(true, "Property size was not found.");
        expect(typeof sortedList.size).to.not.equal('function', "Property size should not be a function.");
    });
    it("should have size property getter", function() {
        expect(() => {let pm = new PaymentPackage('HR')}).to.throw(Error)
    });
    it("should have size property getter", function() {
        expect(() => {let pm = new PaymentPackage(100)}).to.throw(Error)
    });
    it("should have size property getter", function() {
        expect(() => {let pm = new PaymentPackage('HR', -100)}).to.throw(Error)
    });
    it("should have size property getter", function() {
        expect(() => {let pm = new PaymentPackage('', 100)}).to.throw(Error)
    });
        it("should have size property getter", function() {
            let pm = new PaymentPackage('HR',100);
            expect(pm.toString()).to.be.equal('Package: HR\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120')
        });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(pm.VAT).to.be.equal(20);
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(pm.active).to.be.equal(true);
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(pm.name).to.be.equal('HR');
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(pm.value).to.be.equal(100);
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        pm.name = 'PR';
        expect(pm.toString()).to.be.equal('Package: PR\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120')
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        pm.value = 200;
        expect(pm.toString()).to.be.equal('Package: HR\n- Value (excl. VAT): 200\n- Value (VAT 20%): 240')
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        pm.VAT = 100;
        expect(pm.toString()).to.be.equal('Package: HR\n- Value (excl. VAT): 100\n- Value (VAT 100%): 200')
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(() => pm.VAT = -100).to.throw(Error)
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(() => pm.name = '').to.throw(Error)
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(() => pm.value = '').to.throw(Error)
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        expect(() => pm.active = 'true').to.throw(Error)
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        pm.active = false;
        expect(pm.toString()).to.be.equal('Package: HR (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120')
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        pm.name = 'PR';
        pm.value = 200;
        pm.VAT = 10;
        pm.active = false;
        expect(pm.toString()).to.be.equal('Package: PR (inactive)\n- Value (excl. VAT): 200\n- Value (VAT 10%): 220.00000000000003')
    });
    it("should have size property getter", function() {
        let pm = new PaymentPackage('HR',100);
        pm.name = 'PR';
        pm.value = 200;
        pm.VAT = 10;
        pm.active = false;
        pm.value = 100;
        expect(pm.toString()).to.be.equal('Package: PR (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 10%): 110.00000000000001')
    });
});
