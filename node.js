var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"]
//   function for the calculation
function dateOfBirth(){
    var day = document.getElementById("day").value
    var dd=parseInt(day)
    var month = document.getElementById("month").value
    var mm=parseInt(month)
    var year=document.getElementById("year").value
    var yy=parseInt(year.substr(2,4));
    var cc=parseInt(year.substr(0,2));
  var day=parseInt(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10))+ dd)%7;
  var gender=document.getElementById("gender").value
//   validation
if (dd<=0||dd>31||dd ==""){
    alert('Enter a valid date');
}
else if(mm<1 ||mm>12 ||mm==2 && dd>29 ||mm==""){
    alert( 'Enter a valid month');
}
}