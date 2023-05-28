type IconId = 'fb' | 'insta';

export interface SocialItem {
	href: string;
	text: string;
	iconId: IconId;
}

export const SOCIALS: SocialItem[] = [
	{
		href: 'https://www.instagram.com/loremipsum',
		text: 'Nossa página no Instagram',
		iconId: 'insta',
	},
	{
		href: 'https://www.facebook.com/loremipsum',
		text: 'Nossa página no Facebook',
		iconId: 'fb',
	},
];
