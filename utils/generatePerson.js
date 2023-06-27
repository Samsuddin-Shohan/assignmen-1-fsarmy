
const generatePerson = (fields)=>{
    const person = fields.reduce((acc,cur)=>{
        acc[cur]=cur;
        return acc;
        },{})
            
        return person;
}
module.exports = generatePerson;
