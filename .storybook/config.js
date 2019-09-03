import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/App.css';

// Option defaults.
addParameters({
	options: {
		theme: themes.normal,
		isFullscreen: false,
	},
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
