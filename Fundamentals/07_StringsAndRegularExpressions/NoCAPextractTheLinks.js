function noCAPextractTheLinks(strArr) {
    let str = '';
    for (let i = 0; i < strArr.length; i++) {
        str += strArr[i] + ' ';
    }
    let regex = /www\.[A-Za-z0-9-]+\.[a-z]+(?:\.[a-z]+)*/gm; // (?:\.[a-z]+) | ?: след него групата може да я има или не
    let result = str.match(regex);
    if (result)console.log(result.join('\n'));
    else {}
}
noCAPextractTheLinks(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sede-crem.moc',
    'Sentinel - www.sentinel.-ko']);