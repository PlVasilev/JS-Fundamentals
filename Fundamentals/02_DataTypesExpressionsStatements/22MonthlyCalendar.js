function calendar([day,month,year]) {
   let d = new Date(year,month-1,2);
   // console.log(d);
    let today = day;
    let a = d.getDay();
    let dayOfTheWeek = 0;
   switch (a){
       case 0: dayOfTheWeek = 6;break;
       case 1: dayOfTheWeek = 0;break;
       case 2: dayOfTheWeek = 1;break;
       case 3: dayOfTheWeek = 2;break;
       case 4: dayOfTheWeek = 3;break;
       case 5: dayOfTheWeek = 4;break;
       case 6: dayOfTheWeek = 5;break;
   }

    let february = 28;
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        february = 29;
    }
    let lastDayOtThePrevMonth = 0;
    switch (month) {
        case 3: lastDayOtThePrevMonth=february; break;
        case 1:case 2:case 4:case 6:case 8:case 9:
        case 11:lastDayOtThePrevMonth=31; break;case 5:case 7:case 10:
        case 12:lastDayOtThePrevMonth=30; break;
    }
    let lastDayOtTheTheMonth = 0;
    switch (month) {
        case 2: lastDayOtTheTheMonth=february; break;
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:lastDayOtTheTheMonth=31; break;
        case 4:case 6:case 9:case 11:lastDayOtTheTheMonth=30; break;
    }

   //console.log(dayOfTheWeek);
   console.log("<table>");
   console.log("<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>");
   let row = '';
    for (let i = dayOfTheWeek ; i > 0; i--) {
       row += `<td class="prev-month">${lastDayOtThePrevMonth+1-i}</td>`
    }
    let counter = 1;
    for (let i = dayOfTheWeek; i < 7; i++) {
        if (counter === today) {
            row += `<td class="today">${counter++}</td>`
        } else row += `<td>${counter++}</td>`;
    }
    console.log(`<tr>${row}</tr>`);
    let dayOfTheWeekEndOfMonth = 0;
    while (lastDayOtTheTheMonth >= counter){
        row = '';
        for (let i = 0; i < 7; i++) {
            if (counter === today) {
                row += `<td class="today">${counter++}</td>`
            } else row += `<td>${counter++}</td>`;
            if (counter > lastDayOtTheTheMonth) {
                dayOfTheWeekEndOfMonth = i;
                break;
            }
        }
        if (counter > lastDayOtTheTheMonth) break;
        console.log(`<tr>${row}</tr>`);
    }
    counter = 1;
    for (let i = dayOfTheWeekEndOfMonth; i < 6; i++) {
        row+=`<td class="next-month">${counter++}</td>`
    }
    console.log(`<tr>${row}</tr>`);
   console.log("</table>");

}
calendar([31,12,2012]);




