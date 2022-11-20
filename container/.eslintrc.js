const path = require('path');
console.log(__dirname);
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: path.join(__dirname, 'tsconfig.json'),
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	globals: {
		React: true,
		google: true,
		mount: true,
		mountWithRouter: true,
		shallow: true,
		shallowWithRouter: true,
		context: true,
		expect: true,
		jsdom: true,
		JSX: true,
		document: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'react/jsx-key': ['off'],
		'react/display-name': 'off',
		'@typescript-eslint/ban-ts-ignore': ['off'],
		'@typescript-eslint/camelcase': ['off'],
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'@typescript-eslint/interface-name-prefix': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-unused-expressions': ['off'],
		'@typescript-eslint/no-var-requires': ['off'],
		'@typescript-eslint/no-use-before-define': ['off'],
		'comma-dangle': ['error', 'always-multiline'],
		'no-async-promise-executor': ['off'],
		'no-empty-pattern': ['off'],
		'no-undef': ['error'],
		'no-var': ['error'],
		'object-curly-spacing': ['error', 'always'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		semi: ['error', 'always'],
		'spaced-comment': ['off'],
		'no-prototype-builtins': ['off'],
		'sort-keys': ['off'],
		'space-before-function-paren': ['off'],
		indent: ['off'],
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
	},
};
