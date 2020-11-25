enum Color{
    heart = "♥",
    spade = "♠",
    club = "♣",
    diamond = "♦"
}
enum Mark{
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K"
}
type Poker = {
    color:Color,
    mark:Mark
}
type Pokers = Poker[];

function createPoker():Pokers{
    const pokers:Pokers = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const mark of marks) {
        for (const color of colors) {
            pokers.push({
                color,
                mark
            })
        }
    }
    return pokers;
}
const pokers = createPoker()
function printPoker(){
    let result = '\n'
    pokers.forEach((poker,i)=>{
        let str = poker.color + poker.mark;
        result += str + '\t';
        if((i+1)%6 === 0) result += '\n'
    })
    console.log(result)
}
printPoker()