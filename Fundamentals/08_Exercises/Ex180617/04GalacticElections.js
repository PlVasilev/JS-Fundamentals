function galacticElections(input) {
    let systemMap = new Map();
    for (const systemObj of input) {
        let system = systemObj.system;
        let candidate = systemObj.candidate;
        let votes = systemObj.votes;
        if (!systemMap.has(system)){
            systemMap.set(system ,new Map())
        }
        if (!systemMap.get(system).has(candidate)){
            systemMap.get(system).set(candidate, votes);
        } else{
            systemMap.get(system).set(candidate, systemMap.get(system).get(candidate) + votes);
        }
    }
    let systemWinners = [];
    let allFinalVotes = new Map();
    let totalVote = 0;
    for (const systemInput of systemMap) {
        let systemName = systemInput[0];
        let systemCandidates = systemInput[1];
        let sortedCandidates = new Map([...systemCandidates] // turns it to ARR = ARREY.FROM
            .sort((a,b)=> {
                return b[1]-a[1]
            }));
        let currentWinner = [...sortedCandidates[0][0]];
        let currentWinnerVotes = [...sortedCandidates.values()].reduce((a,b) => a+b);
        totalVote += currentWinnerVotes;
        let finalWinnerd = new Map();
        finalWinnerd.set(currentWinner, new Map());
        finalWinnerd.get(currentWinner).set(systemName,currentWinnerVotes);
        systemWinners.push(finalWinnerd);
    }



//    let election = new Map();
//
//    for (let ballot of ballots) {
//        if (!election.has(ballot.system)) {
//            election.set(ballot.system, new Map());
//        }
//        if (!election.get(ballot.system).has(ballot.candidate)) {
//            election.get(ballot.system).set(ballot.candidate, 0);
//        }
//        let currentVotes = election.get(ballot.system).get(ballot.candidate);
//        election.get(ballot.system).set(ballot.candidate, currentVotes + ballot.votes);
//    }
//
//    let result = new Map();
//    [...election].map(([s, c]) =>
//        [s, [...c].sort((a, b) =>           // Place candidate with most votes in system in first place
//            b[1] - a[1]).reduce((a, b) =>       // Collect all votes into first element (previously sorted)
//            [a[0], a[1] + b[1]])])
//        .map(([s, [c, v]]) => [c, s, v])    // Change structure from system with candidates to candidate with systems (all that he won)
//        .forEach(([c, s, v], i, arr) => result.has(c) ? result.get(c).set(s, v) : result.set(c, new Map([[s, v]])));    // Transfer results to another map
//
//    let ranking = [...result].map(([c, s]) =>
//        [c, [...s].map(([s, v]) => v)           // Sum the votes for each candidate
//            .reduce((a, b) => a + b)])
//        .sort(([c1, v1], [c2, v2]) => v2 - v1); // Sort by number of votes
//
//    // Calculate total turnout (number of votes)
//    let total = ranking.map(([c, v]) => v).reduce((a, b) => a + b);
//
//    if (ranking[0][1] > total / 2) {
//        console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
//        if (ranking.length > 1) {
//            let runnerup = ranking[1][0];
//            console.log(`Runner up: ${runnerup}`);
//            [...result.get(runnerup)].sort(([s1, v1], [s2, v2]) => v2 - v1).forEach(s => console.log(`${s[0]}: ${s[1]}`))
//        } else {
//            console.log(`${ranking[0][0]} wins unopposed!`);
//        }
//    } else {
//        console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1] / total * 100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1] / total * 100)}%`);
//    }
}
galacticElections([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 }]);