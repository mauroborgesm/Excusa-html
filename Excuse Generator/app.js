let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];  


function ArrayPicker(item)
{
    let concatenated = item[Math.floor(Math.random()*item.length)];
    return concatenated;
}
function ArrayConcatenator(who, action, what, when)
{
    let sentence = who+" "+action+" "+what+" "+when;
    return sentence;
}

const concatenatedSentence = ArrayConcatenator(ArrayPicker(who), ArrayPicker(action), ArrayPicker(what), ArrayPicker(when));

function WriteToHtml()
{
    console.log(concatenatedSentence);
    document.getElementById("excuse").innerHTML = concatenatedSentence;
}
document.addEventListener("DOMContentLoaded", WriteToHtml);