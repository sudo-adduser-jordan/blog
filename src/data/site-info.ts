export type SocialLink = {
	me?: string;
	/** Longer descriptive label, e.g. `"Join the Astro community on Discord"` */
	text: string;
	/** Short label with the name of the platform, e.g. `"Discord"`*/
	label: string;
	icon: string;
	href: string;
	/** Platform ID, e.g. `"discord"` */
	platform: string;
	footerOnly?: boolean;
};

export type SiteInfo = {
	name: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	socialLinks: SocialLink[];
};

const siteInfo: SiteInfo = {
	name: 'Astro',
	title: 'Build the web you want',
	description:
		'Astro builds fast content sites, powerful web applications, dynamic server APIs, and everything in-between.',
	image: {
		src: '/og/social.jpg',
		alt: 'Build the web you want',
	},
	socialLinks: [
		{
			platform: 'discord',
			footerOnly: true,
			href: '/chat',
			icon: 'social/discord',
			label: 'Discord',
			text: 'Join the Astro community on Discord',
		},
		{
			platform: 'github',
			icon: 'social/github',
			label: 'GitHub',
			text: "Go to Astro's GitHub repo",
			me: 'https://github.com/withastro/',
			href: 'https://github.com/withastro/astro',
		},
	],
};

export default siteInfo;
