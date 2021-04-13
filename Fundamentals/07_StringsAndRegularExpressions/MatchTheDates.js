function matchTheDates(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;

}
matchTheDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']
);