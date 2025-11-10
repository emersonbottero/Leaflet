import {defineConfig} from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

export default defineConfig(withSidebar({
	// site-level options
	title: 'Leaflet',
	base: '/Leaflet/',
	description: 'Leaflet is the leading open-source JavaScript library for **building powerful interactive maps**',
	head: [
		[
			'link',
			{rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'}
		],
		[
			'link',
			{rel: 'preconnect', href: 'https://unpkg.com'}
		],
		[
			'script',
			{src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=', crossorigin: 'anonymous'}
		]
	],
	themeConfig: {
		logo: '/docs/images/logo.png',
		srcDir: './docs-vite',
		search: {
			provider: 'local'
		},
		// nav: [
		// 	{text: 'Announciment', link: '/_posts/'}
		// ]
	}
},{
  documentRootPath: '/docs-vite',
  collapsed: false,
  includeFolderIndexFiles: true,
  includeRootIndexFile: true,
  useFolderLinkFromIndexFile: true,
  capitalizeFirst: true,
}));

