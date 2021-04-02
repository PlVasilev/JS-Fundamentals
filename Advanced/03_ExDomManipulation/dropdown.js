function addItem() {
   let text = document.getElementById("newItemText");
   let textValue = document.getElementById("newItemValue");
       let dropdown = document.getElementById('menu');
       let options = document.createElement('option');//
       options.value = textValue.value;
       options.text = text.value;
        dropdown.add(options);
        text.value = '';
        textValue.value = '';
}

//function addItem() {
//    let text = document.getElementById('newItemText');
//    let value = document.getElementById('newItemValue');
//    let dropdown = document.getElementById('menu');
//    let option = document.createElement("option");
//    option.value = value.value;
//    option.text = text.value;
//    dropdown.add(option);
//    text.value='';
//    value.value='';
//}
//<!DOCTYPE html>
//<html lang="en">
//    <head>
//    //<meta charset="UTF-8">
//    <title>Fill Dropdown</title>
//<script src="dropdown.js"></script>
//    </head>
//    <body>
//    <h1>Dropdown Menu</h1>
//<div>
//<select id="menu"></select>
//    </div>
//    <label for="newItemText">Text: </label><input type="text" id="newItemText" />
//<label for="newItemValue">Value: </label><input type="text" id="newItemValue" />
//<input type="button" value="Add" onclick="addItem()">
//    </body>
//    </html>
