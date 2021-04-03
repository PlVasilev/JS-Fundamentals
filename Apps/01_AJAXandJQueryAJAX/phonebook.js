const BASE_URL = 'https://phonebook-fe84e.firebaseio.com/phonebook';
const TABLE = $('#phonebook');
const PERSON = $('#person');
const PHONE = $('#phone')

$('#btnLoad').on('click', loadContacts);
$('#btnCreate').on('click', createContact)

function loadContacts() {
    $.ajax({
        method: "GET",
        url: BASE_URL + '.json' // get is made with .json at the end
    }).then(appendContacts).catch(handleError)
}

function appendContacts(contacts) {
    TABLE.empty()
    let keys = Object.keys(contacts);
    console.log(keys);
    keys.sort((a,b) => contacts[a].name.localeCompare(contacts[b].name))
    for (const id of keys) { // in for object
        let li = $(`<li>${contacts[id].name}: ${contacts[id].phone}</li>`)
        let a = $('<button>Delete</button>');
        a.on('click', function () {
            $.ajax({
                method: "DELETE",
                url: BASE_URL + "/" + id + ".json"
            }).then(function () {
                li.remove()
            }).catch(handleError)
        })
        li.append(a)
        TABLE.append(li)
    }
}

function createContact() {
    let name = PERSON.val();//
    let phone = PHONE.val();
    if (name.trim() !== '' && phone.trim() !== ''){
        $.ajax({
            method: 'POST',
            url: BASE_URL + '.json',
            data: JSON.stringify({name,phone}) // to work need to JSON.stringify
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