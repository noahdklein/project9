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
// end map
var nameInputField = document.getElementById('submit-res');
var checkNameField = document.getElementById('Name');
var checkDayField = document.getElementById('Day');

function checkNameInput(e){
	if (checkNameField.value.length === 0){
		document.getElementById('message').innerText = "please enter your information."
		checkNameField.className = 'error';
		return false;
	} else {
		document.getElementById('message').innerText = '';
		checkNameField.className = '';
		return true;
	}
};
function checkDayInput(e){
	
	if (checkDayField.value.length === 0){
		document.getElementById('message').innerText = "please enter your information."
		checkDayField.className = 'error';
		return false;
	} else {
		document.getElementById('message').innerText = '';
		checkDayField.className = '';
		return true;
	}
};
function addRes(e){
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
function checkForm(e){
e.preventDefault();
checkNameInput();
checkDayInput();
if (checkNameInput() && checkNameInput() === true){
	addRes();
}
};
document.getElementsByTagName('button')[0].addEventListener('click', checkForm);