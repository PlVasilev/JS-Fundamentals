class PaymentProcessor {
    constructor(){
        this.payments = [];
        if (arguments.length === 0) {
            this.options = {types: ["service","product","other"], precision: 2}
        } else {
            this.options = {types: ["service","product","other"], precision: 2};
            this.setOptions(arguments[0])
        }
    }

    registerPayment(id,name,type,value){
            for (const payment of this.payments) {
                if (payment.id === id) {
                    throw new Error()
                }
            }
            if (id && name && typeof value === 'number' && this.options.types.includes(type)) {
                let payment = {};
                payment.id = id;
                payment.name = name;
                payment.type = type;
                payment.value = value;
                this.payments.push(payment);
            } else {
                throw new Error()
            }

    }
    toString(){
        let sum = 0;
        for (const payment of this.payments) {
            sum += payment.value;
        }
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${sum.toFixed(this.options.precision)}`;

    }
    setOptions(options){
        if (options.hasOwnProperty('types') && options.hasOwnProperty('precision')) {
          this.options = {types: options.types, precision: options.precision};
          return this.options;
        } else if (options.hasOwnProperty('types')){
            return this.options.types = options.types;
        } else if (options.hasOwnProperty('precision')){
            return this.options.precision = options.precision;
        }
    }
    get(id){
        for (const idpayment of this.payments) {
            if (idpayment.id === id){
                return `Details about payment ID:${id}\n- Name: ${idpayment.name}\n- Type: ${idpayment.type}\n- Value: ${idpayment.value.toFixed(this.options.precision)}`
            }
        }
        throw new Error()
    }
    deletePayment(id){
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].id === id){
                this.payments.splice(i,1);
                return;
            }
        }
        throw new Error()
    }
}
 // Initialize processor with default options
 const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('000', 'Biopolymer', 'product', 23000);

// // Should throw an error (invalid type)
// //generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

 generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.toString());
 console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
// //console.log(generalPayments.get('E02'));
// // Should throw an error (ID not found)
// //generalPayments.deletePayment('E028');
// // // Should throw an error (ID not found)
// // generalPayments.get('E027');
// //
//  generalPayments.deletePayment('E028');
//  console.log(generalPayments.toString());
//
//Initialize processor with custom types
let servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

//Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
