const numbers = {"hr-10": "",
					  "hr-1": "",
					  "min-10": "",
					  "min-1": ""};

Object.keys(numbers).forEach(function(key) {
	numbers[key] = document.querySelector(`[js-number=${key}]`);
});

setTime();
setInterval(setTime, 100);

function setTime() {
	var now = new Date();
	var minutes = now.getMinutes();
	var hours = now.getHours();
	
	Object.keys(numbers).forEach(function(key) {
		switch(key) {
			case "hr-10":
				numbers[key].attributes["data-nr"].value = Math.floor(hours / 10);
				break;
			case "hr-1":
				numbers[key].attributes["data-nr"].value = Math.floor(hours % 10);
				break;
			case "min-10":
				numbers[key].attributes["data-nr"].value = Math.floor(minutes / 10);
				break;
			case "min-1":
				numbers[key].attributes["data-nr"].value = Math.floor(minutes % 10);
				break;
		}
	});
	
}