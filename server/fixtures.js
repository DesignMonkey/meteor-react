if(Navigation.find().count() === 0) {
	Navigation.insert({ name: 'Forside', headline: 'Welcome' });
	Navigation.insert({ name: 'About', headline: 'About Nordlys' });
	Navigation.insert({ name: 'Work', headline: 'Our Cases' });
	Navigation.insert({ name: 'Process', headline: 'Our process' });
	Navigation.insert({ name: 'Contact', headline: 'Contact Nordlys' });
}
