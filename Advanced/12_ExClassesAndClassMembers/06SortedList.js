class result{
        constructor() {
            this.list = [];
            this.size = 0;
        }

        add(element){
            this.list.push(element);
            this.size++;
            this.list.sort((a,b) => a-b);
            return this.list
        }
        remove(index){
            if (index >= 0 && index < this.list.length){
                this.list.splice(index,1);
                this.size--;
                return this.list
            }
        }
        get(index){
            if (index >= 0 && index < this.list.length){
               return this.list[index];
            }
        }
}
let sortedList = new result();
console.log("start size :" + sortedList.size) ;
sortedList.add(3);
sortedList.add(5);
sortedList.add(2);
sortedList.add(4);
sortedList.add(1);
console.log(sortedList.list.toString());
sortedList.remove(2);
console.log("Sorted list :" + sortedList.list.toString());
console.log("Get index :" + sortedList.get(0));
console.log("End size :" + sortedList.size);

