class BookCollection {
    constructor(shelfGenre,room,shelfCapacity){
        if (room === 'livingRoom' || room === 'bedRoom' || room === 'closet') {
            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = shelfCapacity;
        } else {
            throw (`Cannot have book shelf in ${room}`)
        }
    }
    addBook(bookName, bookAuthor, genre){
        let book = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            genre: genre
        };
        if (this.shelf.length >= this.shelfCapacity){
            this.shelf.shift();
        }
            this.shelf.push(book);
        function compare(a,b) {
            if (a.bookAuthor < b.bookAuthor)
                return -1;
            if (a.bookAuthor > b.bookAuthor)
                return 1;
            return 0;
        }
        let objs = this.shelf;
        objs.sort(compare);
        this.shelf = objs;
        return this
    }
    throwAwayBook(bookName){
        for (let i = 0; i < this.shelf.length; i++) {
            if (this.shelf[i].bookName === bookName) {
                this.shelf.splice(i ,1)
                i = i-1;
            }
        }
        //console.log(this.shelf);
    }
    showBooks(genre){
        //console.log(this.shelf);
        let result = '';
        result += `Results for search "${genre}":\n`;
        let toReturn = false;
        for (let i = 0; i < this.shelf.length; i++) {
            if (this.shelf[i].genre == genre) {
                toReturn = true;
                result += `\uD83D\uDCD6 ${this.shelf[i].bookAuthor} - "${this.shelf[i].bookName}"\n`
            }
        }
        if (toReturn === false){
        } else {
            return result.trim()
        }
    }
    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length ;
    }
    toString(){
        if (this.shelf.length === 0){
            return "It\'s an empty shelf.\n"
        } else {
            let result = '';
            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`
            for (let book of this.shelf) {
                result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`
            }
            return result.trim()
        }
    }
}

//let home = new BookCollection("Programming", "nome", 5);
let bedRoom = new BookCollection("Programming", "livingRoom",5);
bedRoom.addBook("Introduction to Programming with Java1", "ASvetlin Nakov");
bedRoom.addBook("Introduction to Programming with1", "Svetlin 9", 'aa');
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Introduction to Programming with2", "Svetlin 8", 'a');
bedRoom.addBook("Introduction to Programming with3", "Svetlin 7", 'a');
bedRoom.addBook("Introduction to Programming with3", "Svetlin 6", 'a');
bedRoom.addBook("Introduction to Programming with3", "Svetlin 1", 'a');
bedRoom.addBook("Introduction to Programming with3", "Svetlin 4", 'a');
bedRoom.addBook("Introduction to Programming with3", "Svetlin 5", 'a');
bedRoom.addBook("Introduction to Programming with3", "Svetlin 3", 'a');
bedRoom.addBook("Introduction to Programming with3", "Svetlin 2", 'a');
console.log(bedRoom.showBooks('a'));
console.log(bedRoom.toString());