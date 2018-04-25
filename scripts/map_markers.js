//Single character label for marker bubble
var customLabel = {
	Blood_Donor: {	label: 'D'	},
  	Blood_Bank: {	label: 'B'	}
}
function doNothing() {}

//get the xml file
function downloadUrl(url, callback){
	var request = window.ActiveXObject ?
    	new ActiveXObject('Microsoft.XMLHTTP') :
    	new XMLHttpRequest;

	request.onreadystatechange = function(){
	  	if(request.readyState == 4){
	    	request.onreadystatechange = doNothing;
	    	callback(request, request.status);
	  	}
	};

	request.open('GET', url, true);
	request.send(null);
}

//---------- RENDERING THE MAP
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('background-map'), {
        center: {lat: 19.140590, lng: 72.900400},zoom: 12
  	});
	var infoWindow = new google.maps.InfoWindow;

 	//--- now fetching xml data to render
  	downloadUrl('./database/map_data.xml', function(data) {
    
    	var xml = data.responseXML;
    	var markers = xml.documentElement.getElementsByTagName('marker');

	    Array.prototype.forEach.call(markers, function(markerElem){

	      	var sr_no = markerElem.getAttribute('sr_no');
		    var blood_bank_name = markerElem.getAttribute('blood_bank_name');
		    //--- checking if xml data is accessed correctly
		    //console.log(blood_bank_name);
		    var address = markerElem.getAttribute('address');
		    var mobile_no = markerElem.getAttribute('mobile_no');
		    var type = markerElem.getAttribute('type');
		    var point = new google.maps.LatLng(
		        parseFloat(markerElem.getAttribute('latitude')),
		        parseFloat(markerElem.getAttribute('longitude'))
		    );
			
		    var infowincontent = document.createElement('div');
		    var strong = document.createElement('strong');
	    	strong.textContent = blood_bank_name
		    infowincontent.appendChild(strong);
		    infowincontent.appendChild(document.createElement('br'));
		
			var bank_details = address + " Mob: " + mobile_no;
		    var text = document.createElement('text');
		    text.textContent = bank_details
		    infowincontent.appendChild(text);
		    var icon = customLabel[type] || {};
		    var marker = new google.maps.Marker({
		      map: map,
		      position: point,
		      label: icon.label
		    });
			marker.addListener('click', function(){
				  infoWindow.setContent(infowincontent);
				  infoWindow.open(map, marker);
			});

	    });
  	});
}
// center map on users location
if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function (position) {
         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         map.setCenter(initialLocation);
     });
}
