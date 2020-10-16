$(document).ready(function () {
	if ($("body").hasClass("page-home")) {

		var banner = document.createElement("div");
		banner.id = "myclock";
		banner.className = "wrap";

		var widget = document.createElement("div");
		widget.className = "widget";

		var date = document.createElement("div");
		date.className = "date";
		date.innerHTML = "<p id=\"dayofweek\" class=\"dayofweek\"></p>"
			+ "<p>-</p>"
			+ "<p id=\"day\" class=\"day\"> </p>"
			+ "<p>/</p>"
			+ "<p id=\"month\" class=\"month\"> </p>"
			+ "<p>/</p>"
			+ "<p id=\"year\" class=\"year\"> </p>";

		widget.appendChild(date);

		var clock = document.createElement("div");
		clock.className = "clock";
		clock.innerHTML = "<p id=\"hours\" class=\"hours\"></p>"
			+ "<p>:</p>"
			+ "<p id=\"minutes\" class=\"minutes\"></p>"
			+ "<p>:</p>";

		var box_seconds = document.createElement("div");
		box_seconds.className = "box-seconds";
		box_seconds.innerHTML = "<p id=\"ampm\" class=\"ampm\"></p>"
			+ "<p id=\"seconds\" class=\"seconds\"></p>";


		clock.appendChild(box_seconds);
		widget.appendChild(clock);

		banner.appendChild(widget);
		var container = document.getElementsByClassName("banner-inner")[0];
		//var container = document.getElementsByClassName("section section-category")[0];
		container.appendChild(banner);
	}

	(function () {
		var actualizarHora = function () {
			// Get current date
			var date = new Date(),
				hours = date.getHours(),
				ampm,
				minutes = date.getMinutes(),
				seconds = date.getSeconds(),
				dayofweek = date.getDay(),
				day = date.getDate(),
				month = date.getMonth(),
				year = date.getFullYear();
	
			// Access to DOM elements 
			var pHours = document.getElementById('hours'),
				pAMPM = document.getElementById('ampm'),
				pMinutes = document.getElementById('minutes'),
				pSeconds = document.getElementById('seconds'),
				pDayofweek = document.getElementById('dayofweek'),
				pDay = document.getElementById('day'),
				pMonth = document.getElementById('month'),
				pYear = document.getElementById('year');
	
	
			// Get Day of the Week
			var weekend = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
			pDayofweek.textContent = weekend[dayofweek];
	
			// Get day of the month
			pDay.textContent = day;
	
			// Get month and year
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
			pMonth.textContent = months[month];
			pYear.textContent = year;
	
			// Hour format AM/PM
			if (hours >= 12) {
				hours = hours - 12;
				ampm = 'PM';
			} else {
				ampm = 'AM';
			}
	
			// Check if is 12  in midnight or not
			if (hours == 0) {
				hours = 12;
			}
	
			pHours.innerText = hours;
			pAMPM.innerText = ampm;
	
			// minutes and seconds
			if (minutes < 10) { minutes = "0" + minutes; }
			if (seconds < 10) { seconds = "0" + seconds; }
	
			pMinutes.innerText = minutes;
			pSeconds.innerText = seconds;
		};
	
		actualizarHora();
		var intervalo = setInterval(actualizarHora, 1000);
	}())

});

