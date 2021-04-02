class MailBox{
    constructor(mailbox){
        this.mailbox = [];
    }
    addMessage(subject, text){
        this.mailbox.push({subject:subject, text:text});
        return this;
    }
    get messageCount(){                       // •	Accessor = getter; Muttator = Setter
        return this.mailbox.length;
    }
    deleteAllMessages(){
        this.mailbox = [];
    }
    findBySubject(substr){
        return this.mailbox.filter(m => m.subject.includes(substr))
        //let result = [];
        //for (let msg of this.mailbox){
        //    if (msg.subject.includes(substr)){
        //        result.push(msg)
        //    }
        //}//
        //return result;
    }
    toString(){
        if (this.mailbox.length > 0){
            return this.mailbox.map(m =>` * [${m.subject}] ${m.text}`).join('\n')
            //let result = [];
            //for (const msg of this.mailbox) {
            //    result.push(` * [${msg.subject}] ${msg.text}`);}
            //return result.join('\n')
        } else {
            return ` * (empty mailbox)`
        }
    }

}


let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
