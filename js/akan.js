
function getAkanName () {

  let DD= document.getElementById("DD").Value;
  let MM= document.getElementById("MM").value;
  let YY= document.getElementById("YY").value;
  let gender= document.getElementsByName("gender")
  let MALE= document.getElementById("male-input").checked; 
	let FEMALE = document.getElementById("female-input").checked;
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; s
	let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
	let birthDate = new Date(dateOfBirth);
    
	let dayOfTheWeek =  (((20 / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;


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