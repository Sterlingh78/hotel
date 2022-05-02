// what is the path to the JSON file?
const apiURL = "../hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {

    
    
    let myImage = document.createElement("img");
    myImage.src = myList[i].photo;
    
    let myCaption = document.createElement("figcaption");
    myCaption.textContent = myList[i].name;
    
    let myFigure = document.createElement("figure");
    myFigure.appendChild(myImage);
    myFigure.appendChild(myCaption);

    let myCar = document.createElement("ion-icon");
    myCar.name = "car-outline";

    let myIcon1 = document.createElement("span");
    myIcon1.id = "icon1";

    myIcon1.appendChild(myCar);

    let myAddressText1 = document.createElement('p');
    myAddressText1.textContent = myList[i].address[0];

    let myAddressText2 = document.createElement('p');
    myAddressText2.textContent = myList[i].address[1];

    let myAddress = document.createElement("span");
    myAddress.className = "white";
    myAddress.appendChild(myAddressText1);
    myAddress.appendChild(myAddressText2);

    let myPhone = document.createElement("ion-icon");
    myPhone.name = "call-outline";

    let myIcon2 = document.createElement("span");
    myIcon2.id = "icon1";

    myIcon2.appendChild(myPhone);

    let = myPhoneText = document.createElement('p');
    myPhoneText.textContent = myList[i].phone;

    let myPhoneTextSpan = document.createElement('span');
    myPhoneTextSpan.className = "white";
    myPhoneTextSpan.appendChild(myPhoneText);


    let myDiv = document.createElement('div');
    myDiv.appendChild(myIcon1);
    myDiv.appendChild(myAddress);
    myDiv.appendChild(myIcon2);
    myDiv.appendChild(myPhoneTextSpan);
    
    let mySection = document.createElement('section');
    mySection.appendChild(myFigure);
    mySection.appendChild(myDiv);

    document.getElementById("myCards").appendChild(mySection);


    }


    
}); //end of "then" fat arrow function