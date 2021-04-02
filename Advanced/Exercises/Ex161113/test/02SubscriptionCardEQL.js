const expect = require("chai").expect;

class SubscriptionCard {
    constructor(firstName, lastName, SSN) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._SSN = SSN;
        this._subscriptions = [];
        this._blocked = false;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get SSN() {
        return this._SSN;
    }

    get isBlocked() {
        return this._blocked;
    }

    addSubscription(line, startDate, endDate) {
        this._subscriptions.push({
            line,
            startDate,
            endDate
        });
    }

    isValid(line, date) {
        if (this.isBlocked) return false;
        return this._subscriptions.filter(s => s.line === line || s.line === '*')
            .filter(s => {
                return s.startDate <= date &&
                    s.endDate >= date;
            }).length > 0;
    }

    block() {
        this._blocked = true;
    }

    unblock() {
        this._blocked = false;
    }
}
module.exports = SubscriptionCard;

describe("SubscriptionCard tests", function () {

    describe("Constructor tests", function () {
        it("Should be initialized correctly", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.be.equal('Pesho')
            expect(card.lastName).to.be.equal('Petrov')
            expect(card.SSN).to.be.equal('00000000')
        });
    })

    describe("isBlocked tests", function () {
        it("Should return false for new object", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isBlocked).to.be.equal(false)
        });

        it("Should return true for blocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block()
            expect(card.isBlocked).to.be.equal(true)
        });

        it("Should return true for blocked and unblocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block()
            card.unblock()
            expect(card.isBlocked).to.be.equal(false)
        });

        it("Should return true for unblocked and blocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock()
            card.block()
            expect(card.isBlocked).to.be.equal(true)
        });
    })

    describe("addSubscription tests", function () {
        it("Add correctly subscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card._subscriptions.length).to.be.equal(0)
            expect(card._subscriptions[0]).to.be.equal(undefined)
            expect(card._subscriptions).to.be.eql([]) // whit eql is equal but for all types of objects and arrays and Date
        })

        it("Add correctly subscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions.length).to.be.equal(1)
            expect(card._subscriptions[0].line).to.be.equal("120")
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'))
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'))
        })

        it("Add correctly subscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card._subscriptions.length).to.be.equal(2)
            expect(card._subscriptions[0].line).to.be.equal("120")
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'))
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'))
            expect(card._subscriptions[1].line).to.be.equal("*")
            expect(card._subscriptions[1].startDate).to.be.eql(new Date('2018-05-25'))
            expect(card._subscriptions[1].endDate).to.be.eql(new Date('2018-06-24'))
        })
    })

    describe("isValid tests", function () {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(false)
        })

        it("One day before", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-21'))).to.be.equal(false)
        })

        it("One day after", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-22'))).to.be.equal(false)
        })

        it("On start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true)
        })

        it("On end date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-21'))).to.be.equal(true)
        })

        it("On start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('121', new Date('2018-04-25'))).to.be.equal(false)
        })

        it("On start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-04-25'))).to.be.equal(true)
        })

        it("On start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-04-22'))).to.be.equal(true)
        })

        it("On end date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-05-21'))).to.be.equal(true)
        })

        it("One day before", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-04-21'))).to.be.equal(false)
        })

        it("One day after", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-05-22'))).to.be.equal(false)
        })

        it("Blocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block()
            expect(card.isValid('120', new Date('2018-04-24'))).to.be.equal(false)
        })
    })

    it("Should not change", function() {
        const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        card.firstName = "Test"
        card.lastName = "Test"
        card.SSN = "Test"
        expect(card.firstName).to.be.equal('Pesho')
        expect(card.lastName ).to.be.equal('Petrov')
        expect(card.SSN).to.be.equal('00000000')
    })
})