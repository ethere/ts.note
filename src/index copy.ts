enum Gender{
    male = '男',
    female = '女'
}
const sex = Gender.male;
// const mySex:Gender = '男' //报错
function printGender(){
    const vals = Object.values(Gender);
    for (const value in vals) {
        console.log(value)
    }
}
printGender()