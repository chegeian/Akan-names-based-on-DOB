function getAkanName () {

  var DD= document.getElementById("DD").Value;
  var MM= document.getElementById("MM").value;
  var YY= document.getElementById("YY").value;
  var gender = document.getElementsByName("gender")
  var MALE= document.getElementById("male").checked; 
	var FEMALE = document.getElementById("female").checked;
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; s
	var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
	var birthDate = new Date(MM + '/' + DD + '/' + YY);
	var dayOfTheWeek = birthDate.getDay();


  if (DD <= 0 || DD > 31) { 
		document.getElementById("error").innerText = "Please enter a valid date!" 

}else if ((MM === "September" || MM === "April" || MM === "June" || MM === "November") && (DD <= 0 || DD > 30)) {
document.getElementById("error").innerText = "Please enter a valid date!" 

}else if (MM === "------") { 
  document.getElementById("error").innerText = "Please select a month!" 

} else if (YY <= 0 || YY > 2022) { "entered is valid and doesn't exceed 2022"
  document.getElementById("error").innerText = "Please enter a valid year!"

} else if ((MM=== "February") && (DD <= 0 || DD> 29) && (0 == YY % 4)) { 
  document.getElementById("error").innerText = "Please enter a valid date!"

} else if ((MM === "February") && (DD <= 0 || DD> 28) && (0 != YY% 4)) {  
  document.getElementById("error").innerText = "Please enter a valid date!" 
  
} else if (MALE === true) { 
    document.getElementById("result").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!" //shows result by replacing the  HTML content in the id=result
  document.getElementById("result").style.color = "MediumBlue"
  document.getElementById("result").style.padding = "10% 12% 10% 12%"
  document.getElementById("result").style.fontSize = "35px"
  document.getElementById("result").style.fontFamily = "monospace"
  document.getElementById("result").style.textAlign = "center"
} else if (FEMALE === true) { 
  document.getElementById("result").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!" //shows result by replacing the HTML content in the id=result
  document.getElementById("result").style.color = "DeepPink"
  document.getElementById("result").style.padding = "10% 12% 10% 12%"
  document.getElementById("result").style.fontSize = "35px"
  document.getElementById("result").style.fontFamily = "monospace"
  document.getElementById("result").style.textAlign = "center"
} else if ((FEMALE === false) && (MALE === false)) { 
  document.getElementById("error").innerText = "Please select gender!"
  
}
}