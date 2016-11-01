function initMap(){
	var map = new google.maps.Map(document.getElementById('map'),{
		center: {lat: 40.8054491, lng: -73.9654415},
		zoom: 20
	});
	   var marker = new google.maps.Marker({
          position: {lat: 40.8054491, lng: -73.9654415},
          map: map
        });
}
var nameInputField = document.getElementById('submit-res');

nameInputField.addEventListener('click', checkNameInput);

function checkNameInput(){
	if (nameInputField.value.length === 0){
		document.getElementById('message').innerText = "please enter your information."
		nameInputField.className = 'error';
	} else {
		document.getElementById('message').innerText = '';
		nameInputField.className = '';
	}
};
var dayInputField = document.getElementById('submit-res');

dayInputField.addEventListener('click', checkDayInput);

function checkDayInput(){
	if (dayInputField.value.length === 0){
		document.getElementById('message').innerText = "please enter your information."
		dayInputField.className = 'error';
	} else {
		document.getElementById('message').innerText = '';
		dayInputField.className = '';
	}
};

function addName(){
	var inputName = document.getElementById('Name');
	var newNameText = inputName.value; inputName.value = '';

	var resName = document.createElement('td');
	resName.innerText = newNameText;
	document.getElementById('res-name').appendChild(resName);
};
document.getElementsByTagName('button')[0].addEventListener('click', addName);
function addDay(){
	var inputDay = document.getElementById('Day');
	var newDayText = inputDay.value; inputDay.value = '';

	var resDay = document.createElement('td');
	resDay.innerText = newDayText;
	document.getElementById('res-day').appendChild(resDay);
};
document.getElementsByTagName('button')[0].addEventListener('click', addDay);