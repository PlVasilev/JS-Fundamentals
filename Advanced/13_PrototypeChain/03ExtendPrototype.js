function extendClass(classToExtend) {
    classToExtend.prototype.species = "Human"; // prototype hold the fields of the class we add ne field named "species"
    classToExtend.prototype.toSpeciesString = function () { // prototype hold the fields of the class we add ne function named "toSpeceisString"
        return `I am a ${this.species}. ${this.toString()}`
    }
}
