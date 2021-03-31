function sort(input) {
    let usernames = new Set();
    for (let i = 0; i < input.length; i++) {
        usernames.add(`${input[i]}`)
    }
    let sortedUsernames = Array.from(usernames).sort((a,b) => {let diff = a.length - b.length
    if (diff === 0){
       return a.localeCompare(b)
    } else  return diff  });
    console.log(sortedUsernames.join('\n'));
}
sort(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);