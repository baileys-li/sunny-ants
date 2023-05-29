export const LINKS = [
	{ href: '/about', text: 'o que fazemos' }, //what we do
	{ href: '/helps', text: 'como te ajudamos' }, // how we help you
	{ href: '#contact-us', text: 'fale conosco' }, // contact us
];

export type NavigationLink = (typeof LINKS)[number];
