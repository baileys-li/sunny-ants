export const LINKS = [
	{ href: '#benefits', text: 'o que fazemos' }, //what we do
	{ href: '#about', text: 'como te ajudamos' }, // how we help you
	{ href: '#contact-us', text: 'fale conosco' }, // contact us
];

export type NavigationLink = (typeof LINKS)[number];
