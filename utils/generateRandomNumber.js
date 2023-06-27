
const generateRandomNumber = (min=0,max=100)=>{
    let difference = Math.abs( max - min);

    let rand = Math.random();

    rand = Math.floor( rand * difference);

    rand = rand + min;

    return rand;
}
module.exports = generateRandomNumber;
