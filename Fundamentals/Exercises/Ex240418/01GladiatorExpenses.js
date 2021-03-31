function gladiatorExpenses(fights,b,c,d,e) {
    let helmetCost = Math.floor(fights/2)*b;
    let swordCost = Math.floor(fights/3)*c;
    let sheildCost = Math.floor(fights/6)*d;
    let armorCost = Math.floor(fights/12)*e;
    console.log(`Gladiator expenses: ${(helmetCost+swordCost+sheildCost+armorCost).toFixed(2)} aureus`)
}
gladiatorExpenses(23, 12.5, 21.50, 40, 200);