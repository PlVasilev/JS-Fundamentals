function calendar(arr) {
    let today = arr[0];
    let startingDay = new Date(arr[2],arr[1]-1,1);
    let dayStart = startingDay.getDay();
    let month = '';
   switch (arr[1]){
       case 1: month = "January"; break;
       case 2: month = "February"; break;
       case 3: month = "March"; break;
       case 4: month = "April"; break;
       case 5: month = "May"; break;
       case 6: month = "June"; break;
       case 7: month = "July"; break;
       case 8: month = "August"; break;
       case 9: month = "September"; break;
       case 10: month = "October"; break;
       case 11: month = "November"; break;
       case 12: month = "December"; break;
   }

    switch (dayStart){
        case 1: dayStart = 0; break;
        case 2: dayStart = 1; break;
        case 3: dayStart = 2; break;
        case 4: dayStart = 3; break;
        case 5: dayStart = 4; break;
        case 6: dayStart = 5; break;
        case 0: dayStart = 6; break;
    }
    console.log(dayStart);
    let calendar = $('<table>')
        .append(`<caption>${month+' '+arr[2]}</caption>`)
        .append('<tbody>')
        .append(`<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>`)
    ;

    let february = 28;
    if (arr[2] % 400 === 0 || (arr[2] % 4 === 0 && arr[2] % 100 !== 0)){
        february = 29;
    }
    let lastDayOtTheTheMonth = 0;
    switch (arr[1]) {
        case 2: lastDayOtTheTheMonth=february; break;
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:lastDayOtTheTheMonth=31; break;
        case 4:case 6:case 9:case 11:lastDayOtTheTheMonth=30; break;
    }
    let currentDay = 1;
    let row =''
    for (let i = 0; i < dayStart; i++) {
        row += '<td></td>'
    }
    for (let i = dayStart; i < 7; i++) {
        if (currentDay === today){
            row += `<td class="today">${currentDay}</td>`;
            currentDay++;
        } else {
            row += `<td>${currentDay}</td>`
            currentDay++;
        }
    }
    calendar.append(`<tr>${row}</tr>`);
    while (lastDayOtTheTheMonth >= currentDay){
        let nextRow = '';
        for (let i = 0; i < 7; i++) {
            console.log('a')
            if (lastDayOtTheTheMonth < currentDay){
                nextRow +='<td></td>'
            }
           else if (currentDay === today){
                nextRow += `<td class="today">${currentDay}</td>`;
                currentDay++;

            } else {
                nextRow += `<td>${currentDay}</td>`;
                currentDay++;

            }
        }
        calendar.append(`<tr>${nextRow}</tr>`);
    }

    calendar.appendTo($('#content'))
}
