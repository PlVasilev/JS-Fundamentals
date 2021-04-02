function initializeTable(){
    $('#createLink').on('click', createCountry);
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');
    hideButton();


function addCountryToTable(country, capital) {
    let tableRow = $('<tr>')
        .append($("<td>").text(country))
        .append($("<td>").text(capital))
        .append($(`<td>`)
        .append($(`<a href="#">[Up]</\a>`)
            .on('click', moveUp))
        .append($(`<a href="#">[Down]</\a>`)
        .on('click', moveDown))
        .append($(`<a href="#">[Delete]</\a>`)
        .on('click', deleteRow)));
    tableRow.css('display' ,'none');
    $('#countriesTable').append(tableRow);
    tableRow.fadeIn(2000);
}

function createCountry() {
    let country = $('#newCountryText');
    let capital = $('#newCapitalText');
    if (country.val() !== '' && capital.val() !== '') {
    addCountryToTable(country.val(), capital.val());
    country.val('');
    capital.val('');
    hideButton();}
}

function moveUp() {
    let row = $(this).parent().parent();
    row.insertBefore(row.prev());
    hideButton();
}
function moveDown() {
    let row = $(this).parent().parent();
    row.insertAfter(row.next());
    hideButton();
}
function deleteRow() {
    $(this).fadeOut(function () {
        $(this).parent().parent().remove();
        hideButton();
    });
}
function hideButton(){
    $('#countriesTable a').css('display' , '');
    $('#countriesTable tr:eq(2) a:contains("Up")').css('display' , 'none'); // css('display' , 'none') make it invisable
    $('#countriesTable tr:last a:contains("Down")').css('display' , 'none'); // css('display' , 'none') make it invisable
}
}