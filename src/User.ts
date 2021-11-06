import faker from 'faker';

class User {
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
}

// If you hover over faker and press the cmd key if on Mac (ctrl - Windows) then it will take you to the 'type definition file' for faker.

// Inside this file, you're going to find nothing but typescript syntax that describes the types of values, functions, objects and classes inside the faker library.
