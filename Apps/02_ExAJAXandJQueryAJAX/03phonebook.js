function attachEvents() {
    const BASE_URL = 'https://phonebook-nakov.firebaseio.com/phonebook';
    const TABLE = $('#phonebook');
    const PERSON = $('#person');
    const PHONE = $('#phone');

    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);
    
    function loadContacts() {
        $.ajax({
            method: "GET",
            url: BASE_URL + '.json'
        }).then(appendContacts).catch(handleError)
    }

    function appendContacts(contacts) {
        console.log(contacts);
        TABLE.empty();
        let keys = Object.keys(contacts);
        for (const key of keys) {
            let li = $(`<li>${contacts[key].person}: ${contacts[key].phone} </li>`);
            let button = $('<button>[Delete]</button>');
            button.on('click',function () {
                $.ajax({
                    method: "DELETE",
                    url: BASE_URL + "/" + key + ".json"
                }).then(function () {
                    li.remove()
                }).catch(handleError)
            });
            li.append(button);
            TABLE.append(li);

        }
    }
    
    function createContact() {
        let person = PERSON.val();//
        let phone = PHONE.val();
        if (person.trim() !== '' && phone.trim() !== ''){
            $.ajax({
                method: 'POST',
                url: BASE_URL + '.json',
                data: JSON.stringify({person,phone}) // to work need to JSON.stringify
            }).then(function () {
                PERSON.val('');
                PHONE.val('');
                // let li = $(`<li>${name}: ${phone}</li>`) // append after create
                // TABLE.append(li)
            }).catch(function (er) {
                console.log(er);
            })
        }
    }

    function handleError(er) {
        console.log(er);
    }
}


