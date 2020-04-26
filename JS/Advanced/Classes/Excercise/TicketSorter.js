function solve(inputArray, filter) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        };
    };

    function createObjects(inputArray) {
        let ticketInfo = inputArray.split('|');
        let ticket = new Ticket(ticketInfo[0], Number(ticketInfo[1]), ticketInfo[2]);
        return ticket;
    };

    let returnArray = [];
    inputArray.forEach(element => {
        returnArray.push(createObjects(element));
    });


    function sorter(t1, t2) {
        return (t1[filter] < t2[filter]) ? -1 : ((t1[filter] > t2[filter]) ? 1 : 0);
    }

    returnArray.sort(sorter);

    return returnArray;
};

let sortedTickets = solve(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'],
    'destination'
);
