// Instructions to every other class
// on how to be an argument to 'addMarker'
// So long as a class has a location object with lat and lng properties
// then it fulfills the interface Mappable
interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
}
export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(mappable: Mappable): void {
		// Mappable argument will only look at properties intersecting in both types
		// Typescript limits this
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});
	}
}
