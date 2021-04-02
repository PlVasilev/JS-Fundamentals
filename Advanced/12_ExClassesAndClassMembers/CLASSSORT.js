function tickets(tickets,criteria) {
    let listOfTickets = [];
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i].split('|');
        ticket = new Ticket(ticket[0],parseFloat(ticket[1]),ticket[2]);
        listOfTickets.push(ticket);

    }
    let sortedTikets ;
    if (criteria === 'destination') {
        sortedTikets = listOfTickets.sort((a,b) => a.destination.localeCompare(b.destination))
    } else if (criteria === 'price') {
        sortedTikets = listOfTickets.sort((a, b) => a.price - b.price)
    }
    else if (criteria === 'status') {
        sortedTikets = listOfTickets.sort((a, b) => a.status.localeCompare(b.status))
    }
    console.log(sortedTikets);
    return sortedTikets

}
tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);
tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status');