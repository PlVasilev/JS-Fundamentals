function createBook(selector,titleName,authorName,ISBN) {
    let id = 1;
    let container = $(selector);
    let book = $('<div>');
    let title = $('<p>');
    let author = $('<p>');
    let isbn = $('<p>');
    let selectBtn = $('<button>Select</button>');
    let deselectBtn = $('<button>Deselect</button>');

    book.attr('id',`book${id}`);
    book.attr('stile', 'border: medium none;');
    title.addClass('title');
    author.addClass('author');
    isbn.addClass('isbn');

    title.text(titleName);
    author.text(authorName);
    isbn.text(+ISBN);

    title.appendTo(book);
    author.appendTo(book);
    isbn.appendTo(book);
    selectBtn.appendTo(book);
    deselectBtn.appendTo(book);

    container.append(book);

    $(selectBtn).on('click',function () {
            book.css("border", "2px solid blue")
    });
    $(deselectBtn).on('click',function () {
        book.css("border", "")
    });
}
