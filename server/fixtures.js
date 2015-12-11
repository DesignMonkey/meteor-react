if(Pages.find().count() === 0) {
	Pages.insert({ name: 'Forside', headline: 'Welcome' });
	Pages.insert({ name: 'About', headline: 'About Nordlys' });
	Pages.insert({ name: 'Work', headline: 'Our Cases' });
	Pages.insert({ name: 'Process', headline: 'Our process' });
	Pages.insert({ name: 'Contact', headline: 'Contact Nordlys' });
}
