// function add(a:number,b:number):number{
//     return a + b
// }

import { type } from "os";

// const result = add(1,2);

// let name = '123';

// // let arr:Array<number>;
// let arr:number[];
// arr = [1,2]

//联合类型
let str : string | undefined;
if(typeof str === 'string'){//类型保护
    str = str.concat('end')
}

//void
function print(){
    console.log('print')
}

//never
function throwErr():never{
    throw new Error('这是一个错误')
}
function test():never{
    while(true) console.log('死循环');
}

//字面量类型
let sex : '男'|'女';
let arr : [];
let user : {
    name:string,
    age:number
}

//元组类型
let values:[string,number];

//any类型
let any : any;
values = any;//对any类型不进行检查

//类型别名
type Gender = '男'|'女'
type User = {
    name:string,
    age:number,
    gender:Gender
}
function users(g:Gender) :User[]{
    return []
}

//函数的相关约束
function conbine(a:number,b:number):number;
function conbine(a:string,b:string):string;
function conbine(a:number|string,b:number|string):number|string{
    if(typeof a === 'number' && typeof b === 'number'){
        return a * b
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a + b
    }
    throw new Error('a和b必须是同类型')
}
const result = conbine(1,1)

function add(a:number,b:number,c?:number){
    if(c){
        return a + b + c
    }
    return a + b
}
function printA(a=1){
    console.log(a)
}
printA(1)