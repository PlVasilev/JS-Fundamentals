function XMLMessenger(input) {
    let pattern = /^<message\s+((([a-z]+)=\"([A-Za-z0-9.\s]+)\"\s*){1,})>([\s\S]+)<\/message>$/gm;
    let matches = pattern.exec(input);
    if (matches) {
        let sender = /\bfrom=\"([A-Za-z0-9. \s]+)"/g;
        let recipient = /\bto=\"([A-Za-z0-9. \s]+)"/g;
        let nameSender = sender.exec(matches[1]);
        let nameRecipient = recipient.exec(matches[1]);
        let messages= matches[5].split('\n');
        if (!nameSender || !nameRecipient){
            console.log("Missing attributes")
        } else {
            let html = `<article>`;
            html+=`\n  <div>From: <span class="sender">${nameSender[1]}</span></div>`;
            html+=`\n  <div>To: <span class="recipient">${nameRecipient[1]}</span></div>`;
            html+=`\n  <div>`;
            for (const msg of messages) {
                html+=`\n   <p>${msg}</p>`
            }
            html+=`\n  </div>`;
            html+=`\n</article>`;
            console.log(html);
        }
    }else{
        console.log('Invalid message format')
    }
}
XMLMessenger('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');
//XMLMessenger('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>');
XMLMessenger('<message from="Alice" timestamp="1497254112">Same old, same old</message>');
//XMLMessenger('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\n' +
//    'Let\'s go out for a beer</message>\n');