// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    site: 'https://sudo-adduser-jordan.github.io',
    base: 'test',
	integrations: [mdx(), sitemap()],
});
