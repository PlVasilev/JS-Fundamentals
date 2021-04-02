//Create an object that can clone the functionality of another object into itself. Implement an extend(template)
//function that would copy all of the properties of template to the parent object and if the property is a function,
//add it to the object’s prototype instead.

function extensibleObject() {
    let obj = {
        extend: function(template){
            for(let parentProp of Object.keys(template)){
                if(typeof(template[parentProp]) == "function"){
                    Object.getPrototypeOf(obj)[parentProp] = template[parentProp];
                } else {
                    obj[parentProp] = template[parentProp];
                }
            }
        }
    };

    return obj;
}

