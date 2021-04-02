class CheckingAccount {

    constructor(clientId,email,firstName,lastName)
    {
        this.clientId = clientId;
        if (!clientId.match(/^[0-9]{6}$/g) ){
            throw new TypeError('Client ID must be a 6-digit number')}

        this.email = email;
        if (!email.match(/^[a-zA-z0-9]+@[a-z.]+$/g) ){
            throw new TypeError('Invalid e-mail')}

        this.firstName = firstName;
        console.log(firstName.length);
        if(firstName.length < 3 || firstName.length >20){
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        else if (!firstName.match(/^[a-zA-Z]+$/g) ){
            throw new TypeError('First name must contain only Latin characters')}

        this.lastName = lastName;
        if(lastName.length < 3 || lastName.length >20){
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        else if (!lastName.match(/^[a-zA-Z]+$/g) ){
            throw new TypeError('Last name must contain only Latin characters')}

    }
    
}
//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//console.log(acc);
//let acc1 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//console.log(acc1);
//let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
//console.log(acc2);
let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
console.log(acc3);