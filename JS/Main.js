var text = prompt("Enter your name: ");
var CapFirst= text.slice(0,1);
var NoCap = text.slice(1,100);
alert("Hello " + CapFirst.toUpperCase() + NoCap.toLowerCase());
