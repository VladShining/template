function setDate() {	
	var now = new Date();
	var seconds = now.getSeconds();
	var minutes = now.getMinutes();
	var hours = now.getHours();
		
	var secondsDegrees = (seconds / 60) * 360;
	var minutesDegrees = (minutes / 60) * 360;
	var hoursDegrees = (hours / 12) * 360 + minutesDegrees / 12;
	
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
setDate();
setInterval(setDate, 1000);