function gladiatorInventory(input) {
        let inventori = input.shift().split(' ');  // shift сплитва първия елемент и го шифтва тоест премхва го
        let allComands = {
      'Buy': function (item) {
          if (!inventori.includes(item)) {
              inventori.push(item);
          }
      },
      'Trash':function (item) {
          let index = inventori.indexOf(item);
          if (index > -1){
              let element = inventori.splice(index,1);
          }
      },
      'Repair':function (item) {
          let index = inventori.indexOf(item);
          if (index > -1){
              let element = inventori.splice(index,1); // от индекса изтрии 1 елемент
              inventori.push(element[0]);                 // пушни го накрая
          }
      },
      'Upgrade':function (item) {
          let [realItem, upgrade]= item.split('-');
          let index = inventori.indexOf(realItem);
          if (index > -1){
              inventori.splice(index + 1,0,realItem + ':' + upgrade) // на индекса истрии 0 елемента и сложи упгрейде
          }
      },
      'Fight!':function () {
          console.log(inventori.join(' '))
      },
  };
  for (const string of input) {
      let [command, item] = string.split(' ');
      allComands[command](item)
  }


}
gladiatorInventory(['SWORD Shield Spear',
                    'Buy Bag',
                    'Trash Shield',
                    'Repair Spear',
                    'Upgrade SWORD-Steel',
                    'Fight!']);