function initMap() {
	L.mapquest.key = 'mEBLBkhbpIgMPkC4nUqWS9S49s21z8A1';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.88, -117.238],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.88, -117.238]).addTo(map);
}