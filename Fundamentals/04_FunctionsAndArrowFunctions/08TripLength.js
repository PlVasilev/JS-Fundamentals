function tripLength(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];
    let sumMin = 1000000000000000000;
    let first = 0;
    let second = 0;
    let trip = '';
    let distanceAb = Math.sqrt((x2 - x1)**2+(y2 - y1)**2);//ab
    let distanceBc = Math.sqrt((x3 - x2)**2+(y3 - y2)**2);//bc
    let distanceCa = Math.sqrt((x1 - x3)**2+(y1 - y3)**2);//ca
    let distanceAc = Math.sqrt((x3 - x1)**2+(y3 - y1)**2);//ac
    let distanceBa = Math.sqrt((x1 - x2)**2+(y1 - y2)**2);//ba
    let distanceCb = Math.sqrt((x2 - x3)**2+(y2 - y3)**2);//cb
    function distance3points(a,b,t){
       let sum = a+b;
       if (sum < sumMin) {
           sumMin = sum;
           first = a;
           second = b;
           trip = t;
       }
    }
    distance3points(distanceAb,distanceBc,'1->2->3: ');
    distance3points(distanceAc,distanceCb,'1->3->2: ');
    distance3points(distanceBa,distanceAc,'2->1->3: ');
    distance3points(distanceBc,distanceCa,'2->3->1: ');
    distance3points(distanceCb,distanceBa,'3->2->1: ');
    distance3points(distanceCa,distanceAb,'3->1->2: ');
     console.log(`${trip}${sumMin}`);

    //console.log(distance1);//abc acb
    //console.log(distance2);//bac,bca
    //console.log(distance3);//cba cab

}
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);