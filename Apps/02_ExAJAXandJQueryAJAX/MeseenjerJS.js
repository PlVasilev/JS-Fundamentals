function attachEvents() {
let URL = `https://messenger-3b558.firebaseio.com/messenger/.json`

    let author1 = $('#author');
    let content1 = $('#content');

    $('#submit').on('click',function () {
       let author = author1.val();
       let content = content1.val();
        let timestamp = Date.now();
        $.ajax({
            method: "POST",
            url: URL,
            data: JSON.stringify({author,content,timestamp})
        }).then(function(){
                refresh();
                $('#content').val('')
        }).catch(handleError)
    });

    $('#refresh').on('click',refresh)

    function refresh() {
        let textArea = $('#messages').empty()
        let text = '';
        $.ajax({
            method: "GET",
            url: URL,
        }).then(function(messages){
            let keys = Object.keys(messages);
            for (const key of keys) {
                let p = $(`<p>${messages[key].author}: ${messages[key].content}</p>`);
                text += `${messages[key].author}: ${messages[key].content}\n`
            }
            textArea.text(text.trim())
        }).catch(handleError)
    }

    function handleError(er) {

    }

}