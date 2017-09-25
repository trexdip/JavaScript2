//the array has answers to the questions to the Quiz
var answers=[195,'germany','Conde Koma','byte',8848,'flute','states']

function submitFunction()
{
var a= document.getElementById('one').value
var b= document.getElementById('two').value
var lowerCaseA= b.toLowerCase()
var c= document.getElementById('three').value
var lowerCaseC= c.toLowerCase()
var d= document.getElementById('four').value
var lowerCaseD= d.toLowerCase()
var e= document.getElementById('five').value
var f= document.getElementById('six').value
var lowerCaseF= f.toLowerCase()
var g= document.getElementById('seven').value
var lowerCaseG= g.toLowerCase()


var correct=0
var wrong=0
for (var i=0;i<answers.length;i++)
{
if(a==answers[i] || lowerCaseA==answers[i] || lowerCaseC==answers[i] || lowerCaseD==answers[i] || e==answers[i] || lowerCaseF==answers[i] || lowerCaseG==answers[i])
{
	
	correct=correct+1
}
else
{
	wrong=wrong+1
}

}
var create= document.createElement("h4")
document.body.appendChild(create)
create.setAttribute("id","ten")
document.getElementById("ten").innerHTML="Correct Answers: "+correct
var create1= document.createElement("h4")
document.body.appendChild(create1)
create1.setAttribute("id","eleven")
document.getElementById("eleven").innerHTML="Wrong  Answers: "+wrong
}






