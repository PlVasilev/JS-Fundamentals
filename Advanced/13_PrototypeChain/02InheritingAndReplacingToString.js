function personAndTeacherClasses() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        // override Persons toString(); and use what we can from it
        toString(){
            let parentToString = super.toString().slice(0, -1);// will cut from the back of the string with -1
            return parentToString + `, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        // override Persons toString(); and use what we can from it
        toString(){
            let parentToString = super.toString().slice(0, -1)// will cut from the back of the string with -1
            return parentToString + `, course: ${this.course})`
        }
    }

    return{Person,Teacher,Student}

}

let result = personAndTeacherClasses();
let Person = result.Person;
let Teacher = result.Teacher;
let Strudent = result.Student;

function extendClass(classToExtend) {
    classToExtend.prototype.species = "Human"; // prototype hold the fields of the class we add ne field named "species"
    classToExtend.prototype.toSpeciesString = function () { // prototype hold the fields of the class we add ne function named "toSpeceisString"
        return `I am a ${this.species}. ${this.toString()}`
    }
}


let t = new Teacher("pesho","testmail","JS");
extendClass(Teacher);
console.log(t.toSpeciesString());
//console.log(t.__proto__.__proto__.__proto__.__proto__); //ObjectGetPrototypeOf(t)
//console.log(t.__proto__.__proto__.__proto__);
//console.log(t.__proto__.__proto__);
//console.log(t.__proto__);
//console.log(Teacher.__proto__.__proto__.__proto__);
//console.log(Teacher.__proto__.__proto__);
//console.log(Teacher.__proto__);//