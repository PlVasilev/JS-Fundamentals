function solve(num) {
    let newmap = new Map();
    let students = [];
    let student = {};
    for (let i =0; i < 3; i++) {
        let currentStudent = num[i].split(' -> ');
        let name = currentStudent[0];
        let age = currentStudent[1];
        let grade = currentStudent[2];//
        student = {}; // object // should be inside the arr
        student['name'] = name;
        student['age'] = age;
        student['grade'] = grade;
        if(!newmap.has(name)){
            newmap.set(name,[])
        }
        newmap.get(name).push(student)
        students.push(student)
        //console.log(`Name: ${student.name}`)
        //console.log(`Age: ${student.age}`)
        //console.log(`Grade: ${student.grade}`)
    }
    console.log(students)
}

solve(['Pesho -> 13 -> 6.00','Ivan -> 12 -> 5.57','Toni -> 13 -> 4.90']
);