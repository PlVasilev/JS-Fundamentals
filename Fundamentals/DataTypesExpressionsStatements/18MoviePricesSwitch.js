function moviePrices(movieTitle) {
     let movie ='';
    let ticketPrice = 0;
    switch (movieTitle[0].toLowerCase()) {
        case    "the godfather"   :
            switch (movieTitle[1].toLowerCase()) {
                case "monday":ticketPrice = 12; break;
                case "tuesday":ticketPrice = 10; break;
                case "wednesday":ticketPrice = 15;break;
                case "thursday":ticketPrice = 12.5;break;
                case "friday":ticketPrice = 15;break;
                case "saturday":ticketPrice =25;break;
                case "sunday":ticketPrice =30;break;
                default : ticketPrice = 0;break;
            } break;
        case    "schindler's list":
            switch (movieTitle[1].toLowerCase()) {
                case "monday":ticketPrice = 8.5; break;
                case "tuesday":ticketPrice = 8.5; break;
                case "wednesday":ticketPrice = 8.5;break;
                case "thursday":ticketPrice = 8.5;break;
                case "friday":ticketPrice = 8.5;break;
                case "saturday":ticketPrice =15;break;
                case "sunday":ticketPrice =15;break;
                default : ticketPrice = 0;break;
            } break;
        case    "casablanca"      :
            switch (movieTitle[1].toLowerCase()) {
                case "monday":ticketPrice = 8; break;
                case "tuesday":ticketPrice = 8; break;
                case "wednesday":ticketPrice = 8;break;
                case "thursday":ticketPrice = 8;break;
                case "friday":ticketPrice = 8;break;
                case "saturday":ticketPrice =10;break;
                case "sunday":ticketPrice =10;break;
                default : ticketPrice = 0;break;
            } break;
        case    "the wizard of oz":
            switch (movieTitle[1].toLowerCase()) {
                case "monday":ticketPrice = 10; break;
                case "tuesday":ticketPrice = 10; break;
                case "wednesday":ticketPrice = 10;break;
                case "thursday":ticketPrice = 10;break;
                case "friday":ticketPrice = 10;break;
                case "saturday":ticketPrice =15;break;
                case "sunday":ticketPrice =15;break;
                default : ticketPrice = 0;break;
            } break;
        default : movie = 'error';break;
    }
    ticketPrice === 0 ? console.log('error') : console.log(ticketPrice)
}
moviePrices(['The Godfather','Friday']);