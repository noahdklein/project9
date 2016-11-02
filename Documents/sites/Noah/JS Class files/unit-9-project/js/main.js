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

function checkNameInput(e){
	e.preventDefault();
	if (nameInputField.value.length === 0){
		document.getElementById('message').innerText = "please enter your information."
		nameInputField.className = 'error';
		return false;
	} else {
		document.getElementById('message').innerText = '';
		nameInputField.className = '';
	}
};
var dayInputField = document.getElementById('submit-res');

dayInputField.addEventListener('click', checkDayInput);

function checkDayInput(e){
	e.preventDefault();
	if (dayInputField.value.length === 0){
		document.getElementById('message').innerText = "please enter your information."
		dayInputField.className = 'error';
		return false;
	} else {
		document.getElementById('message').innerText = '';
		dayInputField.className = '';
	}
};

function addRes(e){
	e.preventDefault();

	var table = document.getElementById('resTable');
	var newRow = table.insertRow(1);
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var inputName = document.getElementById('Name');
	var newNameText = inputName.value; inputName.value = '';

	var inputDay = document.getElementById('Day');
	var newDayText = inputDay.value; inputDay.value = '';

	cell1.innerHTML = newNameText;
	cell2.innerHTML = newDayText;

	
};
document.getElementsByTagName('button')[0].addEventListener('click', addRes);