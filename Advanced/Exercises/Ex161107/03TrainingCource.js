class TrainingCourse {
    constructor(title,trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }
    addTopic(title,date){
        this.topics.push({title: title,date: date})
        return this.topics.sort((a,b) => a.date - b.date)
    }
    get firstTopic(){
        return this.topics[0]
    }
    get lastTopic(){
        return this.topics[this.topics.length - 1]
    }
    toString(){
        if (this.topics.length < 1){
            return `Course "${this.title}" by ${this.trainer}\n`
        } else {
            let result = `Course "${this.title}" by ${this.trainer}\n`;
            result += this.topics.map(t => ` * ${t.title} - ${t.date}`).join('\n')
            return result
        }
    }
    //toString() {
    //    let topicsStr = this.topics.map(m =>
    //        ' * ' + m.title + ' - ' + m.date)
    //        .join("\n");
    //    return 'Course "' + this.title + '" by ' +
    //        this.trainer + '\n' + topicsStr;
    //}
}
let js = new TrainingCourse("Js Intro","Nakov");
console.log(js);
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log(js);
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

