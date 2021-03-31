function minkeDecode(input) {
    let start = +input[0];
    let end = +input[1];
    let replacer = input[2];
    let text = input[3];
    let cityArr = [];
    let digitPatern = /[\d]{3}\.?[\d]*/gm;
    cityArr = text.match(digitPatern);
    let city = cityArr.map(st => String.fromCharCode(Math.ceil(st))).join('');
    let cityArrFirst = city.split(' ').map(a => a[0].toUpperCase());
    let cityArrRest = city.split(' ').map(a => a.substr(1,).toLowerCase());
    let cityToPrint = cityArrFirst+cityArrRest;
    let countryPaterrn = new RegExp(`[A-Z][a-z]{${end-1},}[A-Z]`, 'gm');
    let country = text.match(countryPaterrn);
    let replace = country[0].slice(start,end+1);
    let rightCountry = country[0].replace(replace,replacer);
    let countryArrLast = rightCountry.split(' ').map(a => a[rightCountry.length-1].toLowerCase());
    let countryArrRest = rightCountry.split(' ').map(a => a.substr(0, rightCountry.length-1));
    let countryToPrint = countryArrRest+countryArrLast;
    console.log(`${countryToPrint} => ${cityToPrint}`)

}
//minkeDecode(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])
//minkeDecode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])
minkeDecode(["5", "7", "riA" ,"BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he"])