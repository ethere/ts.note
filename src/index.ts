enum Permisson{
    Read = 1, //0001
    Write = 2, //0010
    Create = 4, //0100
    Delete = 8  //1000
}

//权限组合，或运算
const p = Permisson.Read | Permisson.Write;
console.log(p)

//判断是否拥有某个权限，与运算
function hasPermisson(target:Permisson,per:Permisson){
    return (target & per) === per
}
console.log(hasPermisson(p,Permisson.Read))

//删除某个权限，异或运算
const newPer = p ^ Permisson.Read;
console.log(newPer);
console.log(hasPermisson(newPer,Permisson.Read))