function theHungryProgrammer(food,commands) {
    let mealsEaten = 0;
    loop1:
    for (let i = 0; i < commands.length; i++) {
        let commandArr = commands[i].split(' ');
        switch (commandArr[0]){
            case 'Add': if (commandArr[1] === undefined){}
               else food.unshift(commandArr[1]); break;
            case 'Serve':
                    let toServe = food.pop();
                    if (toServe === undefined){}
                    else {
                    console.log(`${toServe} served!`);}
                break;
            case 'Shift':{
                let food1 = food[+commandArr[1]];
                let food2 = food[+commandArr[2]];
                if (food1 === undefined || food2 === undefined){}
                else {
                    food.splice(+commandArr[1],1, food2);
                    food.splice(+commandArr[2],1, food1);
                }
            }  break;
            case 'Consume':{
                let food1 = food[+commandArr[1]];
                let food2 = food[+commandArr[2]];
                if (food1 === undefined || food2 === undefined){}
                else
                    {
                let statingMeals = food.length;
                food.splice(commandArr[1],commandArr[2]-commandArr[1]+1);
                console.log('Burp!');
                let endMeals = food.length;
                mealsEaten = statingMeals-endMeals;
                }
            } break;
            case 'Eat': {
                let eaten = food.shift();
                if (eaten === undefined){}
                else {
                    console.log(`${eaten} eaten`);
                mealsEaten++;}
            } break;
            case 'End': break loop1;
        }
    }
    if (food.length > 0) console.log(`Meals left: ${food.join(', ')}`);
    else console.log(`The food is gone`);
    console.log(`Meals eaten: ${mealsEaten}`);
}
theHungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
                    ['Add ', 'Shift 0 1', 'Consume 1 4', 'End']);
theHungryProgrammer(['chicken', 'steak', 'eggs'],
                    ['Serve', 'Eat', 'End', 'Consume 0 1']);
theHungryProgrammer(['carrots', 'apple', 'beet'],
                    ['Consume 0 2', 'End',]);