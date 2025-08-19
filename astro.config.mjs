// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroExpressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import houston from './houston.theme.json';



// https://astro.build/config
export default defineConfig({
    site: 'https://sudo-adduser-jordan.github.io',
	integrations: [sitemap(), 
        tailwind({ applyBaseStyles: false }),
        astroExpressiveCode({
            themes: [houston],
            styleOverrides: {
                borderRadius: '0.375rem',
                borderColor: 'rgb(84 88 100)',
            },
            defaultProps: {
                overridesByLang: {
                      'bash,sh,shell': { frame: 'none' },
              },
          },
      }),
      mdx(), 
    icon({
          svgoOptions: {
              plugins: [
                  { name: 'preset-default' },
                  {
                      name: 'prefixIds',
                      params: { prefix: () => Math.round(Math.random() * 1_000_000_000).toString(36) },
                      // Ensure IDs used in SVGs are unique to avoid clashes between inline SVGs.
                  },
              ],
          },
      }),

    ],
});
