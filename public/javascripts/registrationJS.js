/*Edwin GonoSantosa
  July 27, 2020
  CPRG 210, Web Dev part 2*/

//This function will ask user if she wants to proceed with form submission
//and give a confirmation for the submission
function submitForm(){
  if ( confirm('Proceed with submission?') ){
    if (validatePostalCode() == true ) {
	    document.getElementById('regForm').submit(); 
      document.getElementById('regForm').reset();
      alert('Submission Accepted');
      return true;
    }
    else{
      alert('Postal Code Format Error');
    }
  }
}

//This function will remove user entry in each input text field (ie. reset the form)
function resetForm(){
  if ( confirm('Proceed with reset?') ){
    document.getElementById('regForm').reset();
    return true;
  }
}

//This function will check entered postal code for proper format
function validatePostalCode(){
  let postalCodeValue = document.getElementById('postCode').value;
  let regex = /^[A-Z]\d[A-Z] \d[A-Z]\d$/i
  let matching = regex.test(postalCodeValue);
  if (matching == true){
    return true;
  }
  else{
	  return false;
  }
}

//This function set the CSS display property of an element.
//displayValue= none means element in question will be removed
function showHideMessage(element, displayValue) {
  element.previousElementSibling.style.display = displayValue;
}

//This function enables the submit button if all fields contains something
function enableButton(){
  let button = document.getElementById('submitButton');
  let fname = document.getElementById('fname');
  let lname = document.getElementById('lname');
  let address = document.getElementById('address1');
  let city = document.getElementById('city');
  let postalcode = document.getElementById('postCode');
  
  if (fname.value != '' && lname.value != '' && address.value != '' && city.value != '' && postalcode.value != '') {
      button.disabled = false;
      console.log(button.disabled);
  }
  else{
    button.disabled = true;
  }
}

//Array containing 4 images to be loaded to index page upon loading
let imageArray = [
  'https://p1.pxfuel.com/preview/989/1013/121/landing-airplane-airline-travel.jpg', 
  'https://p1.pxfuel.com/preview/808/897/237/interior-hotel-rendering-visualization.jpg',
  'https://p1.pxfuel.com/preview/753/4/953/carsharing-car-rental-auto-car-parking-vw.jpg',
  'https://p1.pxfuel.com/preview/286/753/90/ship-cruise-ship-hamburg-port-water-shipping.jpg']; 

//Array containing descriptions of the images
let captionArray = ['Flight Reservation', 'Hotel Reservation', 'Car Rental Reservation', 'Cruise Package Reservation'];

//Array containing URL of 4 websites to be linked to each image
let urlArray = [
  'https://www.westjet.com/en-ca/index',
  'https://www.fairmont.com/banff-springs/',
  'https://www.enterprise.ca/en/home.html',
  'https://www.hollandamerica.com/en_US.html'
]

// This function loads 4 images/description
function showImages(){
  for (let i = 0; i < imageArray.length; i++){
    //console.log('i= ', i);
    
    let activeRow = document.getElementById('tableRow' + (i+1));

    let column1 = document.createElement('td');
    column1.innerHTML = captionArray[i];

    let column2 = document.createElement('td');
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageArray[i]);
    imgElement.setAttribute('width', '100%');
    imgElement.setAttribute('onclick','openWebsite("'+ urlArray[i] +'")');

    activeRow.appendChild(column1);
    activeRow.appendChild(column2);
    activeRow.appendChild(column2).appendChild(imgElement);
  }
}

// This function opens the URL of each image on a separate internet browser window
// and closes that new window after 5 seconds
function openWebsite(url2Open){
  //let newWindow = window.open(urlArray[index]);
  let newWindow = window.open(url2Open);
  setTimeout(function(){
    newWindow.close();
  },5000);
}