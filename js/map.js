var map;

function initialize(){
    var latlng = new google.maps.LatLng(43.529509,1.380454);
    var myOptions = {
      zoom: 13,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	
	 	
    map = new google.maps.Map(document.getElementById("map"), myOptions);
	
	var marker = new google.maps.Marker({
            map: map, 
            position: latlng,
			title:"AVH-Bois"
    });
	   
	   	
	var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">DISTRAL</h1>'+
        '<div id="bodyContent">'+
        '<p>Distral<p>'+
		'<p>10, avenue Bois Vert<p>'+
		'<p>31120 Portet sur Garonne</p>'+
        '</div>'+
        '</div>';
        
	var infowindow = new google.maps.InfoWindow({
			content: contentString
	});


	google.maps.event.addListener(marker, 'click', function() {
			  infowindow.open(map,marker);
	});
			
		
	
}