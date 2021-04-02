'use strict';
function solution() {
    let products = {};
    products.protein = 0;
    products.carbohydrate = 0;
    products.fat = 0;
    products.flavour = 0;

    let recepies = {};
    recepies.apple = {'carbohydrate': 1, 'flavour': 2};
    recepies.coke = {'carbohydrate': 10, 'flavour': 20};
    recepies.burger = {'carbohydrate': 5, 'fat': 7, 'flavour': 3};
    recepies.omelet = {'protein': 5, 'fat': 1, 'flavour': 1};
    recepies.cheverme = {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10};

    return function (input) {
        let [comm, type, qty] = input.split(' ');
        qty = Number(qty);

        function restock() {
            products[type] += qty;
            return 'Success';
        }

        function report() {
            return `protein=${products.protein} carbohydrate=${products.carbohydrate} fat=${products.fat} flavour=${products.flavour}`;
        }

        function prepare() {
            let needed = {};
            for (let key of Object.keys(recepies[type])) {
                needed[key] = qty * recepies[type][key];
            }

            let isEnough = true;
            let result = '';

            for (let key of Object.keys(needed)) {
                if (products[key] < needed[key]) {
                    result = `Error: not enough ${key} in stock`;
                    isEnough = false;
                    break;
                }
            }

            if (isEnough) {
                for (let key of Object.keys(needed)) {
                    products[key] -= needed[key];
                }
                result = 'Success';
            }

            return result;
        }

        switch (comm) {
            case 'restock':
                return restock();
            case 'report':
                return report();
            case 'prepare':
                return prepare();
        }
    }
}