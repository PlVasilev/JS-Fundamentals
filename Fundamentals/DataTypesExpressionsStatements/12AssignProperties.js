function AssignProperties(properties) {
    let obj = {};
    if (obj.length <= 1){
        console.log(obj);
    }

    for (let i = 0; i < properties.length - 1; i++) {
        obj[properties[i++]]=properties[i];
    }

    console.log(obj);
}
AssignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])