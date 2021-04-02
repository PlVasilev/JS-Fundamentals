function personalBMI(name,age,weight,height) {
    let patientChart = {};
        patientChart['name'] = name;
        patientChart['personalInfo'] = {};
        patientChart['personalInfo']['age']=age;
        patientChart['personalInfo']['weight']=weight;
        patientChart['personalInfo']['height']=height;
        let bmi = Math.round(weight/((height/100)**2));
        patientChart['BMI']=bmi;
        if (bmi < 18.5){
            patientChart['status']='underweight';
        }else if (bmi<25){
            patientChart['status']='normal';
        }else if (bmi<30){
            patientChart['status']='overweight';
        }else {
            patientChart['status']='obese';
            patientChart['recommendation']='admission required'
        }

        return patientChart;
}

function personalBMI1(name, age, weight, height) {
    let bmi = Math.round(weight / (height / 100) / (height / 100));

    let patientChart = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi
    }

    let status = (patientChart.BMI < 18.5) ? 'underweight'
        : (patientChart.BMI < 25) ? 'normal'
            : (patientChart.BMI < 30) ? 'overweight'
                : 'obese';

    patientChart.status = status;
    if (patientChart.BMI >= 30) {
        patientChart.recommendation = 'admission required';
    }

    return patientChart;
}

console.log(personalBMI('Peter', 29, 75, 182));
console.log(personalBMI1('Peter', 29, 75, 182));
