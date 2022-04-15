// function to compute interest and display on the page//
function compute()
{
	 
var principal = document.getElementById("principal").value;  
var b = validate(principal);
//validating the principal/amount//
if (b==true)
{
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate /100;
	var year = new Date().getFullYear()+parseInt(years);
	var amount = parseInt(principal)+parseInt(interest);
	document.getElementById("result").innerHTML = "If you deposit "+"<mark>"+principal+"</mark><br>"+"at an interest rate of <mark>"+rate+"%"+"</mark><br>"+"You will receive an amount of <mark>"+amount+"</mark><br>"+"in the year <mark>"+year+"</mark><br><br>";
}
else
{
	alert("Enter a valid Amount");
	document.getElementById("principal").focus();
}
}
//validating the principal/amount//
function validate(p)
{
var z = parseInt(p);//converting into integer//
if (z >0)
	return true;
else
	return false;
	
}
//Change the slider, and test if the display in the span is being updated dynamically.//
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
 

        