type Color = "♥"|"♠"|"♣"|"♦";
type Poker = {
    color:Color,
    mark:number
}
type Pokers = Poker[];

function createPoker():Pokers{
    const pokers:Pokers = [];
    for (let i = 0; i < 13; i++) {
        pokers.push({
            color:"♥",
            mark:i+1
        },{
            color:"♠",
            mark:i+1
        },{
            color:"♣",
            mark:i+1
        },{
            color:"♦",
            mark:i+1
        })
    }
    return pokers;
}
const pokers = createPoker()
function printPoker(){
    let result = '\n'
    pokers.forEach((poker,i)=>{
        let str = poker.color;
        if(poker.mark <= 10){
            str += poker.mark;
        }else if(poker.mark === 11){
            str += 'J'
        }else if(poker.mark === 12){
            str += 'Q'
        }else if(poker.mark === 13){
            str += 'K'
        };
        result += str + '\t';
        if((i+1)%6 === 0) result += '\n'
    })
    console.log(result)
}
printPoker()