function readData() {
	var dd = document.getElementById("dd").value; 
	var mm = document.getElementById("mm").value;  
	var yy = document.getElementById("yy").value; 
	var male = document.getElementById("male").checked; 
	var female = document.getElementById("female").checked; 
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
	var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
	var birthDate = new Date(mm + '/' + dd + '/' + yy);
	var dayOfTheWeek = birthDate.getDay(); 

	if (dd <= 0 || dd > 31) { 
		document.getElementById("error").innerText = "Please enter a valid date!" 
		document.getElementById("error").style.color = "red"
		document.getElementById("error").style.paddingLeft = "36%"
	} else if ((mm === "September" || mm === "April" || mm === "June" || mm === "November") && (dd <= 0 || dd > 30)) { 
		document.getElementById("error").innerText = "Please enter a valid date!" /r 
		document.getElementById("error").style.color = "red"
		document.getElementById("error").style.paddingLeft = "36%"
	} else if (mm === "------") { 
		document.getElementById("error").innerText = "Please select a month!" 
		document.getElementById("error").style.color = "red"
		document.getElementById("error").style.paddingLeft = "38%"/
		document.getElementById("error").innerText = "Please enter a valid year!" /
		document.getElementById("error").style.color = "red"
		document.getElementById("error").style.paddingLeft = "36%"
	} else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)) { 
		document.getElementById("error").innerText = "Please enter a valid date!" 
		document.getElementById("error").style.color = "red"
		document.getElementById("error").style.paddingLeft = "36%"
	} else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)) { 
		document.getElementById("error").innerText = "Please enter a valid date!" /
		document.getElementById("error").style.color = "red"
		document.getElementById("error").style.paddingLeft = "36%"
	} else if (male === true) { 
		document.getElementById("result").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!" //shows result by replacing the  HTML content in the id=result
		document.getElementById("result").style.color = "MediumBlue"
		document.getElementById("result").style.padding = "10% 12% 10% 12%"
		document.getElementById("result").style.fontSize = "35px"
		document.getElementById("result").style.fontFamily = "'Kalam', cursive"
		document.getElementById("result").style.textAlign = "center"
	} else if (female === true) { 
		document.getElementById("result").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!" //shows result by replacing the HTML content in the id=result
		document.getElementById("result").style.color = "Deeppink"
		document.getElementById("result").style.padding = "10% 12% 10% 12%"
		document.getElementById("result").style.fontSize = "35px"
		document.getElementById("result").style.fontFamily = "'Kalam', cursive"
		document.getElementById("result").style.textAlign = "center"
	} else if ((female === false) && (male === false)) { /
		document.getElementById("error").innerText = "Please select gender!" 
		document.getElementById("error").style.color = "red"
		document.getElementById("error").style.paddingLeft = "38%"
	}
}